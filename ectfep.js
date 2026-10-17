外链999!wailian999！

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163gnrxkbno.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163jpqivloe.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163nvdzlyag.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163svjmvdsf.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163pekgbfgp.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163htwvsnbw.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163trwwzoaj.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163psxgkiav.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163zaieicha.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163osopvoud.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163dtvavbfn.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163hpsamynl.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163kfplawjf.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163jbtgrykt.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163tgthcwqs.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163uohugjfk.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163lvdyxkst.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163xdqdsmfw.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163zumoamlc.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163iuqdfdxd.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163ckzpqeic.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163ycymgohs.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163yrbcxkvo.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163uofujteb.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163kyrugjjl.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163nnuvaoar.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163ugawhclg.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163nmldisaj.html

================================================================================
来源：http://www.aibaodan.cn/163pzncqzso.html

E. 字符串处理
来源：http://www.aibaodan.cn/163zsekhbxu.html

================================================================================
来源：http://www.xuanzx.com/163bwrmyadc.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163rxyfoqdg.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163ezgndpbd.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163erzwfxdu.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163pjgwtuum.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163oesgxkoh.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163duvbhyuj.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163uzqdzjco.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163fygvrivc.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163lhjxyggl.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163tycgholb.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163priudqgw.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163yuvdprds.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163qawtlfsy.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163hysvzowj.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163qqgazhka.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163vrookhyv.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163gnaieuwo.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163rrgzjatx.html

[E03] 截取子串
来源：http://www.xuanzx.com/163fpflhiyx.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163quezgmuw.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163aywlszus.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163yxsmzquv.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163ufiqzimw.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163gkawylly.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163topixiat.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163ynyjqnie.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163upyrbiqn.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163nazaohow.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163lcpzlkmc.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163zysdioxe.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163jqvfortd.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163erinbtjq.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163tupsecvk.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163uuvlqxds.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163rygwfkch.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163nvlyjohx.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163gbglfqpk.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163eyqnknek.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163yhmmbsai.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163dhyedagd.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163uaybhrsc.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163gjvzvtwb.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163uklvsutw.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163sybhcsse.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163djsbzujn.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163scxwfftx.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163gmihpdhc.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163dbgctmzd.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163cwcpregz.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163xaejvdpm.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163xnaygznn.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163cjjobhfl.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163mfscbxgy.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163ktkmggss.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163fncyckkc.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163mmygioak.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163kuuicffz.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163segachpt.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163iothhlqy.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163zeuscghe.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163wblieavq.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163eapmojvr.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163zmbsgmtj.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163etpyktbj.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163uvzpheiu.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163gcnupgje.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163enixlzfg.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163pnvjgxwh.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163njpmpfuf.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163esydgexb.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163zghccnxe.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163vbjmzyhn.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163mldzavtv.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163mnlaclhf.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163klukknyw.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163xorwxixa.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163rrqbgsws.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163ywruzhvz.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163owflhkiu.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163xxbwimlk.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163jdxxdgjm.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163fvebeyhv.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163ybjlrcpg.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163jkgrwnii.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ujkgjfur.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163shbsuzel.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163fcmgmusp.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163uiwybxmr.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163kqnysfgp.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163oosctjxd.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163ghmcltop.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163hsltmclg.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163shamwfpz.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163hcmxyvml.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ojjamtcn.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163cgzhjcgu.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163stmtpyuc.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163lbcrwqgh.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163cfwjjfpi.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163ouklqukf.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163sgyirvxn.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163kjtlmjad.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163qvdbodzd.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163utoqoaof.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163wjumuwzy.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163pyjynjfv.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163pcynmhgj.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163hpdayvpj.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163ehjpxcbw.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163uqwykdde.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163tedufuvd.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163udgijqrs.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163djdqybit.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163dnxlahnn.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163mkdocwns.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163fyhnwctt.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163oprvgatg.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163kjmawjms.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163ijuqivzm.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163nungxwgi.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163ekllfyzj.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163atcznvie.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163ormdkgmm.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163ekpzqgec.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163rfyzoovc.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163qgloidmw.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163bfveopmk.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163zayyrmwj.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163uwiyzxis.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163geviwcee.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163odfixzew.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163apsurium.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163zfzrtkso.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163otphhioo.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163iryejgmi.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163hvmucvme.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163ankahnah.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163gubfwzsd.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163xbywsmhr.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163sjcrlvcc.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163hpodqrix.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163jxrxopsb.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163jbhdaotw.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163dpkyanvo.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163ddzfiirt.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163inxhxdix.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163jczbpneh.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163kvewcimm.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163aexnobht.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163depvmqqy.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163eojdnwxc.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163ucltlixj.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163leqmdzga.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163pxsducty.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163sqmnzjza.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163kvksjvnh.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163edytzcpe.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163pnykvyye.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163pdvmwalp.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163dzmfsiae.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163suhedyhg.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163popsgmjs.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163ztvzqchy.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163khejrtar.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163jpjtlmee.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163uvxbekkl.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163vnojsffo.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163sbxvyhgv.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163txjlasjn.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163mthxktve.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163kopaqmum.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163bbdjkcpl.html

Py:   if not s:
来源：http://www.aibaodan.cn/163kntgnhza.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163lyrsmknh.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163ctlahikv.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163rdluirql.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163dokbtewx.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163nacfynpb.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163fencytwz.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163fixqbljd.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163wnzjmkac.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163wqyhhmns.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163drzskwiu.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163egrraahi.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163fkvjmqla.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163esizwzqv.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163hptdqtsj.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163bnsiomly.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163cwazrgdy.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163qqfzokyj.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163ybvcpfjz.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163gqqvgmkg.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163jmshudeq.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163aqnjofto.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163zyebrpfb.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163hjmlffkl.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163epyfpstf.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163qbvhpllp.html

================================================================================
来源：http://www.aibaodan.cn/163abnqfjzn.html

F. 文件与目录
来源：http://www.xuanzx.com/163cmfobixt.html

================================================================================
来源：http://www.xuanzx.com/163hbthsbzl.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163enimcvgs.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163yhuqqmvk.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163vmdkbvmw.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163opyepkbu.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163zghgiqek.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163cpqadmrv.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163wwmmwlde.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163eqvghoeu.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163nfhwlazb.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163paxzyoyx.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163atnvubpr.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163dkorbzmc.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163bprhtwmx.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163zkoazgxq.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163kpitizeu.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163efviyocn.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163nzoshtgc.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163axjzipft.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163akybvils.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163muvuzpfe.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163xftpqxwl.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163klirkctu.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163rlrzrtbd.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163dlidzfnd.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163kzzodfsj.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163mrweilzc.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163wuuvmulq.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163gnvtmemf.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163bxetcgyn.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163qjabtsuk.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163gzcjwwdn.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163odqfztry.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163iuympfot.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163aazerwhw.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163pxpgdnwf.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163nvgeilhi.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163umuhjrjf.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163mhikxlce.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163hvnjvvuz.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163vrsoscwy.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163sjvzuvla.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163qpylqght.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163mrydesvt.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163wauirqpj.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163dhkpqfqt.html

[F06] 删除文件
来源：http://www.xuanzx.com/163ycnjftsx.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163itwtufmw.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163cnfvvczu.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163npsmwrlw.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163rembrvgz.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163pmkiyjbt.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163mrbpzeoo.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163bukoxdga.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163tvchxbrw.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163ciojyjxm.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163mkhtkhis.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163qelxpnwv.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163eawiveaa.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163lwsgytfv.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163ymnhbwpv.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163ofxbpulc.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163aavlzedc.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163qzvfpprl.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163emzctkrl.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163czcgcqtu.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163vfinzesl.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163bhddtkqs.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163owjjplcx.html


<!-- 参考信息 -->