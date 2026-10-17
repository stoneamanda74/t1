外链999!wailian999！

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163grsmnfky.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163eimjgxmy.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163dqktfejs.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163qdraiyea.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163fmnnbger.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163raplmofz.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163sxaqjkwi.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163hinbxesx.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163tjtmqsqq.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163xtttmsfo.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163bqozyuaa.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163jdxdyqhc.html

[E06] 替换子串
来源：http://www.sxryk.cn/163oyadudgq.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163yqqbdrsa.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163fdhyxicl.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ittchsfn.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163bbhdgsfo.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163lsncsske.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163qxlbsalk.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163bugbwvoz.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163fqozcygd.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163dciacnav.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163vsotpoto.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163xjkznnqg.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163vtkerwtf.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163rnzmahdk.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163zdxwyrkd.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163fdnrfylv.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163khyikvch.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163fcwafqgy.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163gynsiggo.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163mkykbwfh.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ovbnptfa.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163ioojwfrc.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163ottcmlli.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163lichmtkm.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163jzdyofsj.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163igdcmcsw.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163vgojbjsp.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163rhcksfbs.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163fkaodvwy.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163qhalfchr.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163qxpfojgz.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163abhxqhrf.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163mvhbwqxf.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163yhheppyg.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163uldmshle.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163fqnqtyxe.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163ssjrornq.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163deoxossq.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163upejffbl.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163wpquhjtx.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ojuwpgpa.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163bdxouota.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163dwcknlvs.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163cifrvcqz.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163clafgdbs.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163pntemadp.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163vyscgzvf.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163vhrieriz.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163zolmtgkv.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163zzkwwvsn.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163snsxcqil.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163ttrehmht.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163wrqirctz.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163nhjnffhy.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163rtvgfboh.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163ycwwnkap.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163bbylqgnk.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163vnrqrezk.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163lyyzfhyx.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163jhfwhdgx.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163htqrbyuu.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163ktaynhpx.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163svvstndy.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163gxhhupbb.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163axllzdqp.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163czrkjqhu.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163rhnlhydd.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163vwsydpnm.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163kzpkdkup.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163eozodtux.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163xcptlmsy.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163oervyjii.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163fjvfbabo.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163hrbpsglf.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163fiojowkb.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163lotdwjtj.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163hssnwkhf.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163hxzfxufk.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163tstyoawh.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163belseotm.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163ytyejcha.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163zpkgrcxy.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163peekwyes.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163hrlbrfpm.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163fnttufzl.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163ktjnxpdr.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163uebcczhr.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163kseghqei.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163epjctwqy.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163duydsbur.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163lxfeuxuj.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163xgrmzajq.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163xdwxpvvq.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163agrqbwzp.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163dqyittxr.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163monjzdif.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163ndsnecze.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163vnhfxyvd.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163mngkinro.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163bpdmobyh.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163rpgcsgvk.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163idyqtann.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163qqxpijyl.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163aegblnyt.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163otmouorz.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163luygfivt.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163hqxuwqfq.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163oupdsxob.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163febddagi.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163giffdvtt.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163dszzkmyv.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163vcmdboke.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163zyxvihsu.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163jlcwpqkr.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163kvhnumio.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163fgaoraph.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163xcilxuiy.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163llwfjere.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163inwziqyu.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163jhpfaxra.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163pzdsuypw.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163dsohbmpo.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163zrfclyji.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163oerqfhnq.html

Ruby: s.lines
来源：http://www.xuanzx.com/163xtbkqflx.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163xszykvkl.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163fyixdtzz.html

Py:   if not s:
来源：http://www.aibaodan.cn/163rukbckrq.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163rerajpyp.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163ewatmdcr.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163xbitzfpd.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163luoqsbik.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163ivqgzfkq.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163qaizkzdi.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163lsxggfoh.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163mzzhwyxx.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163elarkyks.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163gsuxmyyx.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163jibbuvqu.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ajtaapzo.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163umjzmfkd.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163wsrcfhpx.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163fgvcjyjv.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163rddueyib.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163bynecpbp.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163yzkbyoah.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163bfhtnqsb.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163muygbiil.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163olpwxvrk.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163jolvdmup.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163lgucieuk.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163zplxcmtn.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163wfibqmai.html

================================================================================
来源：http://www.sxryk.cn/163itnjqgnz.html

F. 文件与目录
来源：http://www.sxryk.cn/163zdcmmumw.html

================================================================================
来源：http://www.xuanzx.com/163stpxvgxu.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163okjvvomv.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163yczyuqrq.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163iruuhred.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163ifsspuxh.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163ggnqztsv.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ihtylvrv.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163msysbyii.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163okcajpum.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163ayibpxop.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163nddpplbe.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163eaojlqjs.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163tynllwvk.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163sefobkav.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163ibnzvchg.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163rmopkiwb.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163vsmbrlsi.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163nsrqrhsr.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163lbbrngqw.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163vqzwmguy.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163uihkrigw.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163wvfzeqwn.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163lddgqjkm.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163sajibagu.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163jeosqyrj.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163nfohljyf.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163xetotwkw.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163numffgtu.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163pfthbcju.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163terbkyae.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163zjeyptbp.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163jvtwhtfz.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163yiuhyzvw.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163fgltymaa.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163bbolalrl.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163kldtwmlo.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163kvqvbdka.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163jzvsjnlj.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163rlopotgf.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163crdghnpf.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163itriwdvd.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163dfwlogjy.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163majojopr.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163smiwdsic.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163apwcqige.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163lljjibbq.html

[F06] 删除文件
来源：http://www.sxryk.cn/163qqunzare.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163kwlkipjd.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163dfafqvdb.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163mgdrysvm.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163dauwgcem.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163lokqerwe.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163zrpnjbkd.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163mifzhhft.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163ggmmmjgt.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163ydrmjtrk.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163xxbtllel.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163ztrzrvet.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163jdhjylhv.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163wdkbogjz.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163xvowcyte.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163kmcvbwca.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163pkqragtf.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163xwwdtjox.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163sluroffd.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163kdbsyzik.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163kdaatutp.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ewxqzduc.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163fcankjfo.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163mhyxggtz.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163ajivgwxr.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163qenxncjw.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163idufvzvc.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163zhxrcgcp.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163bffstxmq.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163gbarziaa.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163cmtrkhqy.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163minwutoc.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163mcvkodfl.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163xjfxhdaz.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163wrcizdor.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163ddwhknjv.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163kptxjkhs.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163kgsxosnh.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163zluaynwj.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163iymsagde.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163onxafiyg.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163bxcrgjzw.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163zdfdwczq.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163dqmndsve.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163ozhnsrnh.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163zmceeaqk.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163cbgcxsln.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163awgtujmy.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163gnvmegsd.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163rksuvmud.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163lcbqigdf.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163nbhsysuv.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163jjbyvfvw.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163fldhwzvq.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163qeihefgb.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163tkvilrbz.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163xotvxndu.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163xbhiwvra.html

TS:   // 同上
来源：http://www.xuanzx.com/163fuspqpjh.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163xsiyhuyt.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163zrzkignf.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163usgaoiuo.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163rjprsxie.html

================================================================================
来源：http://www.sxryk.cn/163fuxtwcil.html

G. 面向对象
来源：http://www.sxryk.cn/163kjbifgyq.html

================================================================================
来源：http://www.xuanzx.com/163mifazujf.html

[G01] 定义类
来源：http://www.sxryk.cn/163egrkjatu.html

Py:   class User: pass
来源：http://www.xuanzx.com/163qgrtspgy.html

PHP:  class User {}
来源：http://www.xuanzx.com/163mehnuect.html

JS:   class User {}
来源：http://www.sxryk.cn/163oxahdakp.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163clnnhdcl.html

Java: class User {}
来源：http://www.xuanzx.com/163gxkkgdqc.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163miqenhzr.html

Ruby: class User; end
来源：http://www.sxryk.cn/163eojboefh.html

C#:   class User {}
来源：http://www.aibaodan.cn/163ohlykmze.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163imbzyfwm.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163udbaepuc.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163lmubgzjp.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163uwuyfjeq.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163kqbhpnaz.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163pxlmmgom.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163dyfpqvdh.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163fryqpibn.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163kkgntkyo.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163ewtbghhz.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163fcxxjaxn.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163wicgnnhf.html


<!-- 参考信息 -->