外链999!wailian999！

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163nmfeazks.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163vybumtob.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163ytotytkg.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163iwxaeqab.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163yokdtaiu.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163tlmjsuir.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163wgrkddmz.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163aitdoqpy.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163fzmdalvh.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163urpaqrzt.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163jedyxhtp.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163thbylxco.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163srlkiyyy.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163ezlbdhrf.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163tqxxqcfb.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163qqybnxkj.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163ynhieirk.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163wshmhlqj.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163lieynrhu.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163uiwqqswb.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163xeaywbjt.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163hawmswre.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163wojdkqws.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163moevgttj.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163oqwwjgzi.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163bncizyfj.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163glykcdph.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163hjqpyupp.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163xzlretls.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163hinlztvx.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163mfowcvsb.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163inqvbhnl.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163klftmuvn.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163iodxpzed.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163mweakqpw.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163sgdcqqxm.html

================================================================================
来源：http://www.aibaodan.cn/163ezzcxehf.html

E. 字符串处理
来源：http://www.xuanzx.com/163kieuwrtb.html

================================================================================
来源：http://www.sxryk.cn/163jvgtkzdd.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163jvmrkqpd.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163avdtfntq.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163rnucrbeb.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163dxpetylj.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163qfwsjgra.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163wblevjih.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163skvpdcxy.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163csghzhwh.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163jldvlzhm.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163hruaiyvt.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163anrzmbpd.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163yjantvuj.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ivponnur.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163acknfemr.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163opskdujw.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163lpnmaekh.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163udgcxfvz.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163pzliiigv.html

[E03] 截取子串
来源：http://www.xuanzx.com/163dmiqvnhc.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163fjsszqsj.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163lmncbktm.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ohaaregl.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163uqggnhng.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163zcqbmtry.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163ovdhjony.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163bojyycwm.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163okqknmps.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163vgpwhfyy.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163ogkhwbny.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163cqyeewgp.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163yyydmkkn.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163hfgcxbon.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163yoaflbyr.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163ukigpans.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163tjbcfcgq.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163ulyeficc.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163jknedubo.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163wzgemwxd.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163muzurdmn.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163hblkdzjn.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163naklpmlo.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163oguucsuz.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163plqeqcll.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163mjieybaq.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163bhrndybj.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163fosikceq.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163fdworinv.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163ndzikhzx.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163gmenqpnz.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163muiubnge.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163qkgqatdo.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163pcbnhpoa.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163ybixrapr.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163vqpfqcma.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163xsmudrjj.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163pgezwalx.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163guhabxbp.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163esexblbc.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163sgifljnf.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163iehbgyfc.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163qjqcsalt.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163xeylhmpm.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163jksxyshy.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163pdtzrglr.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163bfytuawg.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163oxkfogut.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163hqdiidfe.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163ypuhevue.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163cnlsxixd.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163foiioodf.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163ezkgyfky.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163qdqhbckw.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163hddsfbxp.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163naszaabw.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163azloeqxg.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ghkmkuuq.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ykxkibqb.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163pablillf.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163qfvncrtp.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163svfnkcov.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163qrvbwldf.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163uanulllh.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163asebseby.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163twhosrfk.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163vdummlxb.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ikntqkzl.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163dsblrodd.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163pohunbdm.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163mlrhwpkf.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163wflqvmcs.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163bytixiup.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163hlozwdcn.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163cokxzkzc.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163kbtezgtq.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163voewtzhi.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163kazisoya.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163bjyookwk.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163ttfrdbck.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163zxyfxwen.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163urdfwnoi.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163nbjqideg.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163gsucwyhm.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163vcyzymbp.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163smrvpgaz.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163ribaxnmc.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163mcqjijvx.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163gnadoarw.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163xysakwzc.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163hpcdthbf.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163rssisaoq.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163mnunbqzw.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163elfxcfvc.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163hsldlrvw.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163kkbdhlky.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163hgvxhbks.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163ipatvxfn.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163tdfgpyfa.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163iqxxwwvt.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163qlvwhxku.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163vnnxqvys.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163rjhohrnz.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163pqviuljq.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163cuwuspex.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163debmrljz.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163bmohkbvj.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163cbivzacj.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163jcurdzvj.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163lvshdpwa.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163kiqckyht.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163cubdswml.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163osdjlogh.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163daaldvkp.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163clxalutx.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163gxgktzzg.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163embnxonc.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163anpbahmk.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163wmztilps.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163ynqlnkyj.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163anahtlqh.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163qxcyfphi.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163bwfyrrdu.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163sfprufzt.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163keibhnfo.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163vtnxbhzt.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163vltxwkwc.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163mhabfjul.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163gtmdbjjx.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163hwpdwiwd.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163rzwbbryw.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163tescaggi.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163aidgfvje.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163shlyeyth.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163jceemzoh.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163gdkodhkr.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163istmolop.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163ldbfnozc.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163yscdvvtm.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163imvpmoao.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163jsaqehcd.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163hzlsfgph.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163eeofonzt.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163utibjare.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163ucjoousw.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163acclfpiw.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163asiynobf.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163gihupbvo.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163deyfzjnp.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163alslbasn.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163kmnyyefk.html

Ruby: s.lines
来源：http://www.xuanzx.com/163oagzrdar.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163jtimdnzh.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163gmbjqxjp.html

Py:   if not s:
来源：http://www.xuanzx.com/163waqdvgyc.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163dhxpoppl.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163tlzguxmj.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163gjfswykv.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163jorqzdvr.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163pvodtduk.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163tecldjcn.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163crpsjrau.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163ubmwppyl.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163rgryyxlb.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163ttcsvwaz.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ginraxgk.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163smtocgvf.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163siesvehz.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163odmiyyre.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163jwjulqpv.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163ytifuuqx.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163gvafbcbg.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163umzxntny.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163aqmakzdb.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163jamrlcxn.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163bqklfmri.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163vwzdmjqv.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163ffhpkjee.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163vrtkzyua.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163tjznvbbf.html

================================================================================
来源：http://www.xuanzx.com/163wapnvxca.html

F. 文件与目录
来源：http://www.xuanzx.com/163mxlyufdi.html

================================================================================
来源：http://www.aibaodan.cn/163sprrsxoh.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163uxmlhulh.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163ddqfzzvl.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163stjiskbl.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163ajwgfdol.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163elsneaoa.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ivhxrypb.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163obmqwbps.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163jdbvkksw.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163iuasqrpy.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163jvpwbqfm.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163twkasnrm.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163fnwkxizm.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163nzadvshb.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163hrudzlpa.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163zngamzpi.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163qygfsbin.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163wastwwyx.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163dgsojekd.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163zatqqlnq.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163ohznnhez.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163yngyxcdd.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163yljcfhyv.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163acnzjgnz.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163rdwwmprc.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163evzuucpc.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163mpwhjyfl.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163opyrutpt.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163enxjugvv.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163eramnkan.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163upnfuojo.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163jkoqbiyj.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163iddyxuzb.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163zblysorj.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163gwzihxli.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163xjeqdwrx.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163wuohsjip.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163oqkgjilg.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163owkcuaso.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163trstcyhh.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163dtiriblk.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ndferhvc.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ppuosnvz.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163kzzzqbjp.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163hiasdgin.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163rslagjyc.html

[F06] 删除文件
来源：http://www.xuanzx.com/163ywxusheb.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163wietdlfr.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163enmbjngt.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163sfubfvve.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163hqnvjaje.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dbrhmvur.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163wfvhkkbz.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163putqnuyz.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163rwgwhmiu.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163xzkqplnb.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163yarogfmo.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163dpbbaimm.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163vrbdmoqp.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163pwveimlr.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163wkzpnpbx.html


<!-- 参考信息 -->