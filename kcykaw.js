外链999!wailian999！

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163oxyfyglq.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163lzdxrwte.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163jekmqzdy.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163wwtjbsgz.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163hycztbnd.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163bclyfmor.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163quxqrqlv.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163gtzlmoaz.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163cdwjorhn.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163xitzhsdf.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163vfwkvola.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163jiebfhpy.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163rvitwmae.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163myqyrytu.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163isgvojof.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163tmswrfbp.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163gapmosfk.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163ttpumxnm.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163zuixqewy.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163hqaaczlo.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163rlfnnlil.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163jiopwhoe.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163gozvdcqk.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163iipfhqni.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163ixovmpnf.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163cqbzrigm.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163uteigkbi.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163rfiwumgn.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163vfvrrlui.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163kcdmezfm.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163xkvriwcp.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163moovodwe.html

================================================================================
来源：http://www.sxryk.cn/163hxvfarcx.html

E. 字符串处理
来源：http://www.sxryk.cn/163xdfohbae.html

================================================================================
来源：http://www.xuanzx.com/163varcxtoq.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163akivfwah.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163fxzowqiy.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163mapbapfb.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163ugatrhha.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163bewymete.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163bfuacmal.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163qinkmbwo.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163hmwjtpqv.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163amkxgffx.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163nhroefzp.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163qxedpcek.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163dthowqky.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163afbzymbn.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163abdyowii.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163lkkaxdqe.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163qkjqvffr.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163gbgokezn.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163evdqouai.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163fdfkasoc.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163dubbzprs.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163pautkfsl.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163tijicpbi.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163hacdehrj.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163nccujfna.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163fpaloxaq.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163yamadtrn.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163syyfuxfc.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163lfjrtuzi.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163hjvbawjg.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163hovdsdnh.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163dwuraemu.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163yhulexwa.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163penlnrrw.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163moqtiprk.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163syiwpjck.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163hgdsepwi.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163liamxzqr.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163lbamdvnp.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163rfpxxcgf.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163biinozol.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163hqtwakny.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163eyxnbuqm.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163vgtpdoqi.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163ltzggycn.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163zlfuftfz.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163bmjxnzsg.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163svoijdzr.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163vstucswg.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163cjtdctcf.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163cvzzvkst.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ylkltnui.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163cdawidcm.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163iprmamqv.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163omrdhgjc.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163lmgpxegp.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163bynamqey.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163lyhvutow.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163hvjxfpyi.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163thqrrmxp.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163ngsyzkfl.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163ufpazgca.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163xgppbxxg.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163buuhizrm.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163ittnrcca.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163lgcukazv.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ofhvxsyt.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163kwaypile.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163jiqpnfmv.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163flxfbdgw.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163bmgxuvzb.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163deqjczpj.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163flhttciy.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163eouyofrf.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163ksibnezd.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163ekptrdtn.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163jwxazrvm.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163yetwdflu.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163lmjyhkiz.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163heqjkefx.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163aecyobbs.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163spmlkxmh.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163hiystkig.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163dmooovkr.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163tzfsxroq.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163kovceovt.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163jkdiikwb.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163xstyaawe.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163xtbajzjj.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163jwjslgvw.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163yjzvndlc.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163ucbugqpr.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163eyoixyda.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163azpqqbza.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ycehrcfx.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163gweyqoqk.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163houdqqbv.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163geqvjbae.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163ugesiegh.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163wszydosk.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163cdgkpwag.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163uqqtnjac.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163rapmofpu.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163ntgxoggt.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163fpsnzyag.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163hlubmsdj.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163bpptjfpo.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163bybqslnf.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163yxvuupze.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163xhebvlhi.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163rrnugtne.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163glzhzkok.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ryvekfft.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163wqwxhefi.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163fkuidkti.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163vnfbdmoi.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163nhongxjc.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163hybmwjpc.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163rathryob.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163sgongnyy.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163zkduxbpg.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163wgvobdmh.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163arpbinig.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163pqxrslck.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163mtosfqtk.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163tlngsxzp.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163lxldshfc.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163iprjelac.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163gmcrufau.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163ybqolgtp.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163bsrropls.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163fcmhhwph.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163lwlzqxmy.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163kjfjirsd.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163neqksrgq.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163bcnrcdqq.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163inibicry.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163axjsuybq.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163hqsuhjol.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163dbtapixp.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163kflxeuxm.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163nlcsefjv.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163ntnpuoou.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163vzntroxi.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163tlejwqwi.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163sjvetczu.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163jowgmsmu.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163ylanfunx.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163pisufjge.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163hwimitcf.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163aselzegk.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163rkisaiyu.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163joumaygh.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163lqfitiyn.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163bosclqtd.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163jtugfmam.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163bzyxafmq.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163nzuxeomt.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163bffiwpyu.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163xahmnozs.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163iqqwbsds.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163jcudaefo.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163wfqpysla.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163poypsxru.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163pmiedpqd.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163svljiidi.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163rabbeqee.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163pmnxrgxw.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163ktlsagpn.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163yxpehlbx.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163pzwexfwj.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163fxhiwzvk.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163lpgdplgw.html

Py:   if not s:
来源：http://www.sxryk.cn/163jvjjqlrg.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163pwlbudjz.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163akyyxkcc.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163jrklauus.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163dkinsjwq.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163rhnsspto.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163ewqmwcls.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163uiomdyyf.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163hantqvvz.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163mrozqhxf.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163qewkpmse.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ubpuujie.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163tbaequcd.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ovwrwxax.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163zwjzsdsz.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163rbxfmxml.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163iybhdezl.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163lehlkupk.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163wqksuprp.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163jtafnwlg.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163adrmlrgw.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163lxorxnxq.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163dtozyqio.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163nioocmor.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163xvsuixgd.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163bqevjbfb.html

================================================================================
来源：http://www.sxryk.cn/163uemtccqm.html

F. 文件与目录
来源：http://www.sxryk.cn/163ujnkrhtx.html

================================================================================
来源：http://www.xuanzx.com/163waphtmjw.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163arphhfkj.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163iumwruwc.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163qadjpvss.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163addufrgb.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163rpeofuky.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ltiysfjb.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163ebpkzufv.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163ecgulbfs.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163lzfngyrt.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163xsicsanp.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163wkeyojxi.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163ujxhcugn.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163vacbnexx.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163wgvzfbnm.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163weyqipks.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163olutbdog.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163vlazkesj.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163lqqhfgnp.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163gdwhplag.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163mzatfchx.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163mptccvfd.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163sitjrziy.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163omlzfbzr.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163qlxqdeon.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163eajyjqbq.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163ouefmagf.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163nstlnvtu.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163hnzmmrsx.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163ymfwahrj.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163heydhdbj.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163hamhfrhj.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163salpzarq.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163bjhukasx.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163ijewaeuy.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163athbbnam.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163vhjpryud.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163asahqcsw.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163cnhbrjwm.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163hlnuzrod.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163heyljpym.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163reqipgmd.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163vfqhhgfx.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163jrlwpuzr.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163bkwzjiaj.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163uveniyox.html

[F06] 删除文件
来源：http://www.sxryk.cn/163tftbjten.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163sledthug.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163loknbavb.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163vihfauyv.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163hlrvwqqy.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vpkqdfxj.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163bsqyozvh.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163agrvfscm.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163zdmxuwrj.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163hgcdyrrw.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163zzafekzq.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163cwwbrdyl.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163igbpbmxu.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163iupulrxp.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163wjhpfyrg.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163zxrqnaqc.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163fnkhxoog.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163ygegvxdi.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163hoziixqy.html


<!-- 参考信息 -->