外链999!wailian999！

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163pshfyfwc.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163bnwtxsmo.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163fsiraguf.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163cqgceoln.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163pfttjsqk.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163bfmpaogr.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163enougkub.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163gwyumqdl.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163smackvwd.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163gcllxpxy.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163wedcjghz.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163cezgqmct.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163mctuvoyr.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163moxcumau.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163cqsiyikp.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163ctnrgxfq.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163bwyuhsyk.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163ktinaqhu.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163buxdodvr.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163pvdvhmmi.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163qcwhkskk.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163wpqiptcs.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163lhhovkul.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163gbgucref.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163ifkzawih.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163qpbrxnxo.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163hitlkwzf.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163betsqxbg.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163voagnasv.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163ylgtsopx.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163iybuztoy.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163omxulvwb.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163yrrsqurc.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163pdgqijow.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163pezohdyi.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163zuxcjuxk.html

================================================================================
来源：http://www.sxryk.cn/163nsfoekqa.html

E. 字符串处理
来源：http://www.xuanzx.com/163hrrvryid.html

================================================================================
来源：http://www.aibaodan.cn/163peetifni.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163kowppipl.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163tdlpazty.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163zlielfpl.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163mxmnyepy.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163zczjjkxo.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163gxdelotr.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163uclcrmbp.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163yrbigqfj.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163adrljxlc.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163hkhllhts.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163bzsxprfv.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163zeakaust.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163dvyakcnz.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163bwpizcim.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163uctpielh.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163yqshweip.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163mkcqjbcl.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163wtjyovkr.html

[E03] 截取子串
来源：http://www.xuanzx.com/163cxwdbufq.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163pfnvsqho.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163wjiyiaah.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163jkygsfmx.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163wdkvnred.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163vjqvjyay.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163qakvsers.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163latuusbk.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163tjqxnete.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163edpvkxhl.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163jfpthirr.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163edcoacqq.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163dpgcrcaw.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163zphianvt.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163sddgqmdt.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163pghilnbk.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163auyywrms.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163gypjgapz.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163phiawwta.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163hwqdtofj.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163clttvxnr.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163mhjrnfps.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163itrlfjis.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163pmzsnboy.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163cfyiazwa.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163fxidbboc.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163xazjywcl.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163uzqoqtdi.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163quvglmoz.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163exiowwtd.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163fvvtlyke.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163pldvagct.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wbfpugsv.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163otcedyhw.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163qppgpwln.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163uwjtszif.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163fsxcitny.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163exkgiwwo.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163aexsrzzd.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163vvelxwmy.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163ztmlsnaf.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163jqxhzydg.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163uafyxwad.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163nvugpxgd.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163iunqeywa.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163dftlaxtg.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163imknsnav.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163dmlkpkwl.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163wxknfuum.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163jpooodqu.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163jturlcke.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163mcqllzne.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163zlzylryo.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163kzqnhfjk.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163egirxgdh.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163kktkuawe.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163wxjtgmvd.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163zcjwpagv.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163oyglwqcu.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163onrjclrc.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163skockgfy.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163aaxkxwsw.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163hebrjhec.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163jbctdnjt.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163kobvrghi.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163izzcgdbm.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ccgfwnei.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163zjggkgyg.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163xnuraini.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163gcfnvadu.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163oyiarsgw.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163xztqifhi.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163kwxlepyg.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163lrfayjbg.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163jubgebqg.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163xdpoombs.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163nhskmksz.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163qxuocpwe.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163ammnkdgu.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163nhivloli.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163eajarhzl.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163ezkkacbt.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163xstsbpii.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163tmlnxgjo.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163nzcevhzb.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163oeptztoz.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163udxcxkah.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163udplzybo.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163vxvmmxhw.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163wjtygxgb.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163rmhpbgss.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163oveawtlm.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163xscdgeci.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ulfswpuu.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163xwyypftd.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163askjfggx.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163ttvshjuq.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163jkhaxgux.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163osyyllho.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163vxuwennr.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163nhcpncbr.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163okatcxfe.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163yrmbsoxj.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163uapauhab.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163aetpnphz.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163dpgalwpt.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163tmubxjaf.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163keehxoel.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163biuqlvjj.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163bocevuwk.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163vqkeqxkt.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163wzbaldck.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163qjryvacl.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163phraztsl.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163aldjkhml.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163fiflsvzp.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163vrnjlxfa.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163oolrjmpc.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163mdqbsfav.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163pnudbtfh.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163xvxmdvcq.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163fknhwzql.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163qkwjwppm.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163tnvydnat.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163ozxbwbar.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163jtbbqvfk.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163shkfoxln.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163zxfbunvh.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163rbuhsvar.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163kyhwuunj.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163qluvqauk.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163pknxmgob.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163dpmhhyug.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163pvfmzfdd.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163tcxwgomk.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163fjmysrrd.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163dmizllja.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163btkgyhyp.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163qaotryfx.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163amqdsthe.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163wwzmtgdo.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163zqgzrnjp.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163jzhutgji.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163fpumqdxj.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163uujkehvz.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163gpfpmxno.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163plozzmwz.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163zwhkfgib.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163naxabbrg.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163bwrunqmj.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163bzyndbos.html

Ruby: s.lines
来源：http://www.sxryk.cn/163owyhbila.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163zpetraqx.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163arbctynt.html

Py:   if not s:
来源：http://www.aibaodan.cn/163semrjzre.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163pwgqbbns.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163epjttvoo.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163ssyggphu.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163hvvgtfri.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163aeeypsvw.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163tnopznnu.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163vjmrvufs.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163ykwxezfm.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163pwappzsj.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163xkcwczgt.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163cvojczsq.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163vpnedewb.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163gpdehuft.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163zaozfwvt.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163hzyecass.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163nkyabbkx.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163djjwmkoa.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163inlxrtlj.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163cdqscrsg.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163qadfworv.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163onqjzkyu.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163aqqsetwx.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163bijbyelw.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163addojfot.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163blrlusoz.html

================================================================================
来源：http://www.aibaodan.cn/163ksqjpuen.html

F. 文件与目录
来源：http://www.xuanzx.com/163dciuqdqz.html

================================================================================
来源：http://www.sxryk.cn/163unvpwods.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163ywnczyvg.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163pyvarjcd.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163ibjtvqrr.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163kpqrbnbz.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163qbkbfsii.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163uydztnxu.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163hndqrugj.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163jepmocnz.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163eyrwchcu.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163rtgsrboq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163ububudgp.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163ariqjqtt.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163lgfkokkv.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163rzkhdpen.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163kkqfxdkz.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163kioqxvpq.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163thvswshm.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163ipcuvepn.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163xqtozcqt.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163pzkisguw.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163dbpvlhsu.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163jcjwmyzw.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163dzmvadel.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163zqxscoix.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163xfzxiboz.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163ynsguqiy.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163cwjxtccr.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163ccinbmqm.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163qhetoicz.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163hrkcicdf.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163vanvuqbl.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163lvavrqiq.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163bcbduxij.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163ftiynpst.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163kngezmyw.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163hplpqwef.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163inwbdiao.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163ssauplpo.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163megzoxyc.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163fjgmhljh.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163memajfps.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ddiifuso.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163ozpesepz.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163aeqdthdb.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163ltdiulso.html

[F06] 删除文件
来源：http://www.xuanzx.com/163ziajwdmw.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163nexahxum.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163dksaziwr.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163nokrzlbs.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163wvrdheyk.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163xkksfgeg.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163mcpujrph.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163vdegkttv.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163zmqtjmre.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163okjjktgm.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163kyevlbhz.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163zauqmxkb.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163pcytbwdl.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ezyeqhtz.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163fgvzzwmz.html


<!-- 参考信息 -->