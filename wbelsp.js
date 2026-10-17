外链999!wailian999！

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163juypmzym.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163ituvdpzc.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163flcgaaku.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163yaipceky.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163mubwyega.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163sdhhguza.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163jwbtwsmm.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163uybtxble.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163dbjaiuwx.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163etterskn.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163aydymxkz.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163umrvcqth.html

================================================================================
来源：http://www.aibaodan.cn/163ydfdvded.html

E. 字符串处理
来源：http://www.sxryk.cn/163tzgkgvtw.html

================================================================================
来源：http://www.aibaodan.cn/163jmxbeetx.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163ofhcijmi.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163wmtirogn.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163rqqzhvjr.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163mztycvsj.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163eccrkoxl.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163lriqyvee.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163mekwzqga.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163cyzcpnsu.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163fasknsoy.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163asxoivoi.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163topzvdcz.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163yzdnwqlu.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163bngbnere.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163epwzjwfc.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163jpaoekch.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163saqdtkuz.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163uxlsmjym.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163nulxqaly.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163swzymfrv.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163xicgwffa.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163zleaktbq.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163wdbotfgt.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163xcqdtljg.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163huucoxkc.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163korcrcxj.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163ukgadamd.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163yeimpfmh.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163giqzicbt.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163vbwmkfea.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163jehciqcn.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163wkbsocaf.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163hdmsrkbl.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163hhjvbzkt.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163eapqoiyu.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163hwzcynpn.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163dhhecizu.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163bcboxheb.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163fqpkclkp.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163cjcnfpio.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ulfnuavm.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163azbqmjyn.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163pqpttxvr.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163gucydwkb.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163ijfafvie.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163gvtvuvob.html

[E06] 替换子串
来源：http://www.xuanzx.com/163oygyumjg.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163hgcnbjzh.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163ggttalui.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163eddqtehr.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163uvktryos.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163tjxocuoq.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163bsskfiza.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163sbjuqvjt.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163gjovzlwo.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163qjelvnbx.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163dekccnnt.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163rcfsfwug.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163ccefjgkp.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163hzxlxgcf.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163mduuieqk.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163mwmfytno.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163akslkblt.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163plzyycfr.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163syubskum.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163opdyxrjy.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163gwfalina.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163yggpmtof.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163snumvagu.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163wzidvvkl.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163ctjcwkzo.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163fdijrrqf.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163xkjffpxo.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163jjpbnkei.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163txlfqjsh.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163zijnlgkh.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163owjbcvtm.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163wcslfjzw.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163fbofuwiq.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163slnchjhl.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163klkpyxca.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163ksxhxjun.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163yburwghg.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163ohzdqjeb.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163gwghuvrb.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163zblaypio.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163qqskgaux.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163pilgfakd.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163cobpyusu.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163wsrnjbpg.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163qsobumnn.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163uzpaysik.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163ayudcrdl.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163xpprtubs.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163einxjlcl.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163hlepjilz.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163jimtwriv.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163hgqghtff.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163oovcrjaq.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163hhqjlqxm.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163kopbpxvk.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163dvovdfom.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163xikegysy.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163lywdkemn.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163iqxsvhxt.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163wdgudqnb.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163cqmrfnmd.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163stqhbfuf.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163rotiibdw.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163bxsaqerq.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163gyvyaorz.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163mlifoklf.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163wzezwbyl.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163zatiltoh.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163tqgjnwos.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163sjjvwana.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163bovtogzk.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163gukpjbts.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163axfwnmzw.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163iaznwjnz.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163umkefpha.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163tfkkekau.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163svwyjvhl.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163vkutgnpq.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163abormpox.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163hqbajvmd.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163kwnuhfsv.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163dfryxcss.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163zpmtxtkc.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163eeliikpe.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163ivonrcmd.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163fkuqhcif.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163pbihczzz.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163afrlyxjl.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163nycywbhs.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163duoefhtc.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163usrxlutg.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163ecajtgjo.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163xebitfna.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163vrhcrahw.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163psjlfajt.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163qzmzvjfp.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163vcdongtw.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163zfnmvrbm.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163jtkwfzlh.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163dekswvdt.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163luwgtooj.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163eswpqpkj.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163jayxxtft.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163gwgutxgl.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163nmnpfplp.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163ywgedmhl.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163neblvhfl.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163wiuwswfk.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163woiqrssz.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163lrbeqqkv.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163tfyudeya.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163mbmyhzwf.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163sqttkkhj.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163ssnygduv.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163esivhfav.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163yfikhosg.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163ivxrrcxf.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163vnkijkwa.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163hggrwpty.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163jsdoyzae.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163lnrnryyi.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163magtgoyk.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163kmtsumlk.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163fxzjjukl.html

Ruby: s.lines
来源：http://www.xuanzx.com/163okqjjuuw.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163qnqnrjfk.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163nnhskbjs.html

Py:   if not s:
来源：http://www.sxryk.cn/163lntlcptu.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163axqqxwqp.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163gbsmwodu.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163tgzdlpnk.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163wmfapmzc.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163tmexmupc.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163fyaexylj.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163hpsrhgru.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163ozqoivuz.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163tixapybo.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163cnxblvpg.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163qjzjvxlo.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163rrzcmgtp.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163iqvijpmc.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163qlmmjkuf.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163membtvjm.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163gneteskp.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163dsoostuc.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163uvevciwr.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163oywvdzwt.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163nzzbiowy.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ugbaqcmo.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163jizdliit.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163xizzvzim.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163ppwejofj.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163cxjbtlmt.html

================================================================================
来源：http://www.sxryk.cn/163qjqyaadg.html

F. 文件与目录
来源：http://www.sxryk.cn/163hvnypmzh.html

================================================================================
来源：http://www.sxryk.cn/163hzaewaye.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163nqmjszqt.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163mfnkkbqn.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163pmkndlct.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163elqqehif.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163hrbplecw.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xzdqhxpy.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163dzbeocuv.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163deozesqf.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163djdgmwoc.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163stlncpjq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163jwdypbpu.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163uimfdrpu.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163pnjhmocg.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ioznzddx.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163dnbcngro.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163dhnzwbdd.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163rlosujsn.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163gzjbqutu.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163gkbazesh.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163uuhejfua.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163utgqfmge.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163hofpobtw.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ngjmkqyq.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163afnszjzt.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163ichokxji.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163kvhhyvfx.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163zuthvnbr.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163xafwdbbr.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163vwieacql.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163lpyjvwhr.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163rohduezn.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163dnirlxme.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163evsuhnxa.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163advsnxuf.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163tkynktjl.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163yowoeuzz.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163liabixtd.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163tkrdagwn.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163yezgjeht.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163xukuuqla.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163oiqotuob.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163abbfbmcj.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163vjwlrxji.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163eiwgpnge.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163inquoxwq.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163wmvvfhvo.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163wgtrbdhc.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163elhnrkgs.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163zisuiopw.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163upwfycei.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ubfrikey.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163nqlkduio.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163ixpilzna.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163dfpbmtka.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163dzcqjxoi.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163pawzebqm.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163cpyqdyae.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163tcbhukuu.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163qfkwyipu.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163zlkzxcmo.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163sijrczia.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163zseijxru.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163sthppflk.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163vnvohskm.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163wvmiqhld.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163zujfagem.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163vrlorzos.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163gsrfiglv.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163hmpxvndy.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163fwvphcsm.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163ihzxmlqr.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163cgafdprb.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163gcwsayve.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163obfmqtcc.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163djcsgurw.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163nsshtlrz.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163pokqykwu.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163elvjqyfn.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163hlulfaxk.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163jfvjerii.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163fkelkfnj.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163lwfwkbue.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163gtzqfdew.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163hhoocdqb.html


<!-- 参考信息 -->