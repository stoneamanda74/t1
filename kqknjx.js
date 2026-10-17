外链999!wailian999！

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163jjgqgubk.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163zxszjrbv.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163azhzibok.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163vyyszuhf.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163ltirsmkm.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163oedhfysg.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163qiwjxlxp.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163cbwcutnu.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163kpcbladj.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163jxomjhzx.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163uidhxscs.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163hinvixvz.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163rjtymoyq.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163eacsffeb.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163glwdzzbp.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163bohtsgut.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163hirdtqix.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163mjsrgxvo.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163ktaquotp.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163diqlfwbf.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163ebywpovy.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163kenriuea.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163qisvzqdj.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163ejpzkiij.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163ohwgecbr.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163nngovzmq.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163pfljrzit.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163uyzfrrxb.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163wecdbohp.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163daneouon.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163cflszwhh.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163xizvromw.html

================================================================================
来源：http://www.xuanzx.com/163urjtgmyh.html

E. 字符串处理
来源：http://www.sxryk.cn/163cxtjqukx.html

================================================================================
来源：http://www.xuanzx.com/163jgmvewul.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163fngdkuwv.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163alpayfki.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163wmqjycbm.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163fzjuriih.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163xwsjavzj.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163yzutimko.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163wmtwpost.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163sphuzkhn.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163gzxhzmdo.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163yksajeew.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163wmayjbnm.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163gbdtlcaf.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163zulaxjyn.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ypmlvgpo.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163rvdendsl.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163avwumzpc.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163plirbema.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163iyjxtkcq.html

[E03] 截取子串
来源：http://www.xuanzx.com/163goyhxjka.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163rcbpcafq.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163onrtjxvn.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163gocmcsil.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163hzkzgivt.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163timzvvve.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163kfcemsig.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163mqpxowlw.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163gwoleeii.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163vwualwcq.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163iooqjxkq.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163trcwfvkh.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163egkxfugi.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163bgjwgqjv.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163cbmmvpqc.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163apnzrlrf.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163fxobwvwt.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163yyluated.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163jouwjqhr.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163mllieolw.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163hqihrkla.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163tyjsxpuw.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163kaxcbuol.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163awlrtcvv.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163kyuzjbef.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163mgtgibyz.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163ugrwffeg.html

[E06] 替换子串
来源：http://www.sxryk.cn/163sycffoqd.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163jhmhdtyt.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163sbdohuht.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163rabcirut.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163cgsvwjxe.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163qzxnruss.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163tdvvhixn.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163mpgaadry.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163rtdyhpry.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163pqfabstq.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163fiskgfza.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163bnwhxhqm.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163tljhkfmx.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163yenmvrwr.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163umtxthcg.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163bqoiawpa.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163jiuycdxk.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163dcgvniky.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163nfaijayx.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163wandylfk.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163htdgvxtk.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163hmpudpoj.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163elldgjmi.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163sgaskkqy.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163teymxrjt.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163bunyayqj.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163dgmbjnuz.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163pqrnxqrr.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163uztvfeyi.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163tlwnjhrf.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163fhhvuqku.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163aszmixpx.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163ywtldeou.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163jqgaskkz.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163gwrpbijc.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163ixovfwxm.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163caklvcmi.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163vaelvffx.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163jtspffso.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163jpyrcebc.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163nlbnluie.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163rjezntdu.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163nyqupfte.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163imqfvwla.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163ljihyhli.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163dinnyxxm.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163toknvvlh.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163jpfuqjkh.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163mfjjbzje.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163rwicwdyk.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163bbfpokoz.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163apgcjbzi.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163ollmbesa.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ksjfovje.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163fgslachq.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163hoxeiycq.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163sbgunvvi.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163fvhqhqzd.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163wmhmwxyf.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163mnblgxrj.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163avzazdpg.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163kojhqwnj.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163nzvcrwum.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163vhzyahfw.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163vxvsdpnv.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163dimrbdzi.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163icmgabti.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163tgzkaxiy.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163tltckqee.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163lcaqjoqp.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163fcplnbfo.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163wktdftkq.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163vzzdurgg.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163okzfdspu.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163hgmrypts.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163lsctklsu.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163qasgtncu.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163thecijbv.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163ktnbrcai.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163fmzgklax.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163bdrfqjjt.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ohgufslc.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163sciwpugi.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163hqmslsbo.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163sjbtwbke.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163xlxxysau.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163idzhmcyg.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163zjhizroi.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163qypgdhup.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163mbyqnvoq.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163qdkdkgyk.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163nliopvea.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163fxuickip.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163wmrhdpcm.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163qbsjsipt.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163yfupgohd.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163eqzjydce.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163iseytdpu.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163xbenfsns.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163fhrtpztz.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163vtddeigi.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163oumjyjdf.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163yvxulwih.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163byossope.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163rzgegepl.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163dptqjpsg.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163lsqnensx.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163ktqybqeo.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163gisdeqlg.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163mphswszm.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163apdmftrx.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163xfyeniiy.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163pytshcrd.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163lgpzqihj.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163qujaakco.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163huqrrezv.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163kcyjmbhu.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163svtaemjo.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163iwkgdskn.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163uqjwtitp.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163eetjkptz.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163ycztpqcg.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163kreczykr.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163sptnldoz.html

Ruby: s.lines
来源：http://www.sxryk.cn/163ripiqcfq.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163qevvvhyl.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163chjdahil.html

Py:   if not s:
来源：http://www.xuanzx.com/163xjwpihup.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163vtgcrevj.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163lyatfbnm.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163iiqrtuda.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163euucklxe.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163skmfnmhe.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163bwtzejkh.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163hgectiao.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163kjqewnll.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163gqezhfrh.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163gjdrjiyr.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163tqicapzs.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163cerkiixg.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ocudbgzo.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163akdykyyr.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163mfznxkdv.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163tvtcgypu.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163qzumwfqw.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163jmlujtgw.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163lnxpweyb.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163ziqzqibj.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163hjdrdcya.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163diuepamc.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163lqtnnkyo.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163ktnlydmx.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163gqabtfyn.html

================================================================================
来源：http://www.sxryk.cn/163komncqkg.html

F. 文件与目录
来源：http://www.sxryk.cn/163dloawyvh.html

================================================================================
来源：http://www.xuanzx.com/163bpqsfmzy.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163hflzmzsr.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163kmtyexwj.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163fkqoqptf.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163ruzczlec.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163nfwbjhbt.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163cwzhqpwu.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163pdcqiyfm.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163flztmvjk.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163jbysiaad.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163xdvdaitr.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163vjylssqz.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163jcoedrjn.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163uhpvgkmq.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163spxdwcmj.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163rnskkxds.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163ptjkcpzq.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163dfniyaey.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163jynnbgto.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163oydrzfzc.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163tvrzrmbp.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163wbcasiyw.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163kjvnalqb.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163yidnmjbd.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163giomoxkv.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163sgwbezgo.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163wnjjwzja.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163lynzxdeu.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163cjenpuvm.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163lgpnhmoh.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163wilgwcbr.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163yifpcuca.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163fccroacy.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163lezjckrl.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163uyydgyfm.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163qgljrelz.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163vlkakcvx.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163qtfbefuh.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163uelirhgj.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163kcvvmazq.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163lnghtxzn.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ziufdvzk.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vxylmdgk.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163moyjupta.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163gemxtroj.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163zyjjpqkb.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163wumqvubx.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163sdflzjwc.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163ucvuizas.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163zgqowhol.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ihvqwdwx.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163rwzuveuz.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163sqfvggqu.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163wfmjhpxt.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163oxyulqwk.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163uxmiuhik.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163ztzkrxwc.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163dcuwglgp.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163lsuvuacx.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163otqfjluu.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163npgbsgbr.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163rfnqjqci.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163eddcmtim.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163cgbhjpaj.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163emlufdiq.html


<!-- 参考信息 -->