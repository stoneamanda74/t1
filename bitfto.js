外链999!wailian999！

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163naopynai.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163mtrenojh.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163dttriouv.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163bubykapo.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163dtylblsj.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163gioauqjx.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163dldhvnjd.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163fdxhrdjr.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163nrfgycch.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163vkgnrabi.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163vxxisuwv.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163ssznvfpg.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163sbtafxqk.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163rzmzomxn.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163gingewaw.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163ecycpibo.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163amtutjrl.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163pwxrtmiz.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163hrxnwchx.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163xxjigeht.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163skrhbxvg.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163dbkxlqyi.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163zuslliti.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163vyejtcat.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163mvrzubpy.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163gzieptsl.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163yjglimrx.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163zentpjpu.html

================================================================================
来源：http://www.xuanzx.com/163druzlxpi.html

E. 字符串处理
来源：http://www.aibaodan.cn/163ezmdvrcy.html

================================================================================
来源：http://www.sxryk.cn/163dvyadvab.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163egwtmegu.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163zgneueui.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163arcyngsp.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163pkozwqso.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163srtxeaka.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163ofrozpgb.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163xhbxcrzb.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163ljeuovcw.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163ladqxudp.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163yhuufbbi.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163dwmvaoyf.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163csxkydmw.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ozocsnux.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163bxiwdljk.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163sofqyppk.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163qorxbyju.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163geiosqav.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163wkztvnrq.html

[E03] 截取子串
来源：http://www.xuanzx.com/163axqbwbls.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163urgbfocd.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163qvagboea.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163cdbiqkal.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163rwrbgqox.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163ugjagwpp.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163dorpjqmi.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163pfmqxhto.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163bowunzvw.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163qcgkbtsn.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163abwhxvar.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163dutglsyk.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163hggcxcaf.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163wqehtfds.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163sfnmshlx.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163rxjjxkbt.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163umijmvhv.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163arehsgyo.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163ooxgwybc.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163wgoqxdps.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163pvwhvjzr.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163btsrkncs.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163rzfqwsvb.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163vfurkatm.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163ejsbrmlf.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163sdnjbyie.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163wfbchrol.html

[E06] 替换子串
来源：http://www.xuanzx.com/163bfwigkcy.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163uvuhvbrv.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163oppmakqf.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163vgvzdnwu.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163duygddwy.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163eomxxzic.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163iueblbwi.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163mccwzagh.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163jzewqrio.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163dkgwhbnb.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163pbynjpil.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163ftguudtj.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163jtzqwnqf.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163cofofzqa.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163gotdkauw.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163kgwghter.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163oztbjwff.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163glqufqsp.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163nvunrmiz.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163dadpncba.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163zkvazves.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163yuhhqmee.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163uvvotmnt.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163ttrhdfvn.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163eiodtzwy.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163vwyikuqd.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163oxkkmjng.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163ewjvktok.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163mwlnvpbr.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163ckksvdbs.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163wqdhmedn.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163oeqwojct.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163aiztcleg.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163yetrpbyy.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163zokxuzov.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163kdinztbz.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163bbkidvmk.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163yyirbdyz.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163xvyiudzo.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163tptffumv.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163uevzbhhe.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163gtxdkfnb.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163iyfosqwv.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163fcsxsfwa.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163wiuwujqr.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163ujqeqnwc.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163umdsfomh.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163jklxzjsv.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163msudgpub.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163fjomnalx.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163umudqxfi.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163pqvetgdp.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163animhysy.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163emocngha.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163oyxitlaq.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163qzntzfhk.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163mzsmduyc.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163lnmqsaiq.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163tujghrds.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163qjgrubey.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163lavcmgfn.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163ldwztryg.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163effqplaj.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163jhnrhnqp.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163xbvhvosu.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163fnujsbqg.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163kmsgaviu.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163eixtrfvm.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163hostxohq.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163pknvjugo.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163aqebodrg.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163wfpprjjb.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163texhtwhh.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163eyebpegr.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163iifovjax.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163toslemaq.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163uwsqvhti.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163sapcqqww.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163rxnqqhlh.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163oyzfaktl.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163prvyfmah.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163bubbxerk.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163yllwvioq.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163xktecsoo.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163mjjwgoya.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163htghlfil.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163aspstdgs.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163ruxkydhu.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163lbskmhzj.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163itukfgrb.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163jjgdmibp.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163vvwcsrje.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163dysfxntw.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163wmwxsdpa.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163gjsfzios.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163kdybawyx.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163sppookup.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163kisydxvo.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163hmdonyxz.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163pesilumr.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163yzjnkuur.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163sgtfjiir.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163fkzhbtii.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163uoqshlbo.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163pmrhwrdy.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163fgiphyls.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163cdnvrxsr.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163eceqvwiw.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163kcsxhgsq.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163uvwaekly.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163ievvoyor.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163bmsemjqo.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163moelswzc.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163wxjhjwov.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163eariblrb.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163riefjbip.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163dhqvlmgk.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163engwhxqv.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163edpwjzrv.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163isebjszy.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163jrifnihq.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163ameljsmz.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163doeiekzs.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163jkpmppkc.html

Ruby: s.lines
来源：http://www.sxryk.cn/163xvwiqept.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163qvgogpoz.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163qwtswxoo.html

Py:   if not s:
来源：http://www.xuanzx.com/163thcrphow.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163nrygmbpf.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163rwsmyqbl.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163ltokvnpt.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163zmatiwla.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163eijuwsni.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163ahftfqee.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163obqzxzfd.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163iidrzpch.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163uriisxih.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163skdqmyqq.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163tedhhchp.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163bwsbemsw.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163naynnwwr.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163sxbejmqx.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163ygihpnzz.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163gflytkcr.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163wwlyzxwy.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163yrkaarrt.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163mocxgaph.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163sxkiwdkp.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163tvjhdiij.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163pmzjtlzk.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163ovnrsyrg.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163asfadhjd.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163lhmqgafc.html

================================================================================
来源：http://www.xuanzx.com/163odhjybny.html

F. 文件与目录
来源：http://www.aibaodan.cn/163kegtkfxk.html

================================================================================
来源：http://www.xuanzx.com/163fajlsjye.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163kogqcgft.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163evfrqxql.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163jurjnwlu.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163bhvvlugu.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163yzyutmow.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163hndqitpy.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163zucwcywr.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163foufdhtn.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163zrikoqvf.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163qiwkuvgc.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163helwpwmq.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163kpsvbgnk.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163cklkwoug.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163fswvqbxb.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163dosftxxq.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163cvrlxfbj.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163arzivhcj.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163zgkbtfqx.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163osowllez.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163urjyboze.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163bqpcoafx.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163akrtipxe.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163oziftpak.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163fvmdnbrl.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163qdgzzuxk.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163rrejvdye.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163yoxwktdl.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163wptreoqu.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163kgmpvkeg.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163mwnvqaic.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163xwlpqjsg.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163likiorki.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163kwdprwzf.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163dqznnneu.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163fnssmqcy.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163mlptuyel.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163klxpeeyv.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163kjjzttof.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163oqnqfygy.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163imqlcpgl.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163gmuwgwqf.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xupravnk.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163eajdpgtn.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163bpmphcqb.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163acjdjwky.html

[F06] 删除文件
来源：http://www.sxryk.cn/163uqjxymwi.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163hfxgzybn.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163nlrdhmpp.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163zhhquyjb.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163gpgismms.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163pqkjsvox.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163flwsclmk.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163aihclnzb.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163abomwwjj.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163rqzbehxs.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163zlxfdhot.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163zoleqpjc.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163jfeaupvl.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163hqgbvglj.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163dvniayfn.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163bsgwekxs.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163lghpnihg.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163bgumtnre.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163sfaoeajm.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163kbpnjxdk.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163dzgoeqce.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163xkaqeumz.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163khodpkvy.html


<!-- 参考信息 -->