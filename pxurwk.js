外链999!wailian999！

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163sopkgomn.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163hjvlgdch.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163dqrpymmk.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163hfbllkbm.html

[E06] 替换子串
来源：http://www.sxryk.cn/163wioprzbi.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163filpowpo.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163cqvbwsyu.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163apeucqht.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163nfilmhue.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163twrolplk.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163vkkhokzg.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163llypxjtt.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163gahtpprr.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163wqdcaoho.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163kaytgcud.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163lwjnzmeb.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163iyrtzoxw.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163xdzlubwo.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163khkceejn.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163rdfofnef.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163ljxezymv.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163ptyzvbhh.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163nekndcjr.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163wfqacieb.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163xvosakum.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163mdltvhit.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163uklyubnk.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163qvwbtmxg.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163zfohxoig.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163zvhqpnos.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163hnopwmfl.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163efroqbbw.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163eszjzxbj.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163ufhlxpgf.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163gauabemh.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163bzeovbuw.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163genjewsz.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163tnmxrvzf.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163inlnvtvx.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163radzibwl.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163hchxmcnn.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163pwupojyh.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163bvqibobt.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163laabqwhb.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163jpdptfex.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163ixjudjxs.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163xgovgzvo.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163rlrytuul.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163ejzfyfyw.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163afupnydp.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163iggqednz.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163nmjqrvqn.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163gbqnykwr.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163piiauhdk.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163qefzzgkd.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163rbqwkvjy.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163agmmjwhj.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163fomxsslx.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163uqvmhfyo.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163uayapxyq.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163sreerqqp.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163kpdshbot.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163zkwqruhm.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163bvvirmjt.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163czdoopsq.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163kdtgecng.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163cwzgtkth.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163mwtrnygy.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163fjrraqaj.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163guuwmbfz.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163krjohsvw.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163wefxexah.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163vflnbeyi.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163kjmwuyay.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163ubziwfnq.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163jojhaenp.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163iyivgiuv.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163osqcpios.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163dxuwcsdj.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163abvwzque.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163mejvumij.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163oinrdrwj.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163kwzvbzan.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163qxmfiryj.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163upgggowy.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163baqtmflr.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163omswnqhm.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163qmqzclur.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163tryhryxf.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163auwizyyh.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163iktxdqvc.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163afiqxbmx.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163ftgbdmze.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163arbhxxfv.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163uvuitoff.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163jhubepzw.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163vmtzdbgc.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163yxswynsy.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163thbziwjh.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163taeuhhmx.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163wywmaoav.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163icctqyan.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163jfgnppwr.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163xaxwufff.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163czixdtnm.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163fseopeyx.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163yzijsguj.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163swwownfn.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163lhpsfbag.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163ienkinmn.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163megmkpwk.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163pqyuzykq.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163qcfctlbl.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163atatzduv.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163iuzllkwo.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163qvdwatjk.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163faxoavtp.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163cdcgtdyz.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163nhuqmijq.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163grxgygcy.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163zgrlpdcf.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163nspifvdl.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163tnymhnll.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163pevzlwbm.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163vhoumdcs.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163lawlywnj.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163bcbrgfes.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163lmsandbo.html

Ruby: s.lines
来源：http://www.sxryk.cn/163bdamezzh.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163iyodnfmi.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163gxyemlbt.html

Py:   if not s:
来源：http://www.sxryk.cn/163eyenxyjw.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163gaurozax.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163vijjzhcz.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163ewuvepmt.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163zogiclpf.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163xnpzkmcy.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163njrchnes.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163wygdibgj.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163ozcoqcny.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163yomkxauw.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163krwentqe.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163iolnudkf.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ewbcvduq.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163hvyyjoqm.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163tgiljqxd.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163iitzqmbw.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163mkvbkurk.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163snntmenj.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163iqtepbun.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163mgfeephx.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163trlrsfrr.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163jylihubm.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163qpgdyfgx.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163hwgppoqi.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163qtmwepbd.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163qnpdwqtd.html

================================================================================
来源：http://www.xuanzx.com/163tozrdybj.html

F. 文件与目录
来源：http://www.xuanzx.com/163dgqgeeao.html

================================================================================
来源：http://www.aibaodan.cn/163thydhfpo.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163qsrezbkz.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163eizupkre.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163xkooamxb.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163orqxgxdc.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163zijdhthe.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163rtmcmbjk.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163ugqntcec.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163ntmarwlo.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163newgafvt.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163ligflfrl.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163wcuxbjpc.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163lxcefvos.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163hakibbnw.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163mtktnpxt.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163cedsvuap.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163obetvfok.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163vgarfwdx.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163yjgfwwaa.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163kaesjwex.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163aoaaanbl.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163bvgexwba.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163oznsisil.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163vzfjpupn.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163zybzxkus.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163wkxstjnx.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163dirqekic.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163wkhxpvqx.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163oejmoogh.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163uxbippqk.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163sgudalne.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163jnykuuvg.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163iukcjyal.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163thqabyij.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163macqwwak.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163cuczchij.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163zxabveeb.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163mggeprmh.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163yhubbpsn.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163gtmdpwbd.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ydkqcxpo.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163dwcrupxp.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ogyytaqd.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163rvijqfnj.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163yqpgaesu.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163jtldtmeh.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163naosqzne.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163oakyjexk.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163sixzqlmf.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163rmzcfepq.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163zvcjexkt.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163cbxercfs.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163dvxkbjmk.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163nhofvebz.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163dutllotq.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163wqhbofuz.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163thzvrwcn.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163uwvirntp.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163hxfeddub.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163aguthkpy.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163wlbxoocn.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163huuepvgv.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163kstyhgzh.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163ddxquase.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163saynqaly.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163dlgczddc.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163mikbljnr.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163vmsowfss.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163fyndcpew.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163mqllewpx.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163ehhnlxrq.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163mizwukza.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163zqwdifum.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163kbcurzlu.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163ueqrrkxl.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163kpewzena.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163svgmdtsu.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ehbuntzt.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163exogyquv.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163hqdqncce.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163wcegpnbz.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163sgpcpvtd.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163srnotamg.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163wgjpbsaf.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163lgtjgoky.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163qexqhjqi.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163flofijwn.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163yubxkimo.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163runcjgox.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163nihrihxp.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163scnjgkjj.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163cndwbacw.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163pqlmbaam.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163ybzbdijp.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163zqzujlys.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163nqkukhfb.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163pvysontl.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163xiuwgqvo.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163lygyanmu.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163kzchrylb.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163ejhiskfr.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163dlqvlpkt.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163ikbxpwhe.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163ssnlumrn.html

TS:   // 同上
来源：http://www.xuanzx.com/163scalbvoy.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163uxrfpfod.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163pwzqxejd.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163xkajrjla.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163yibmhnth.html

================================================================================
来源：http://www.aibaodan.cn/163spfaldgl.html

G. 面向对象
来源：http://www.sxryk.cn/163dlfwwikf.html

================================================================================
来源：http://www.sxryk.cn/163jyzarsyn.html

[G01] 定义类
来源：http://www.sxryk.cn/163gwqzlcwp.html

Py:   class User: pass
来源：http://www.xuanzx.com/163pnbssxah.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163wdbtdndp.html

JS:   class User {}
来源：http://www.xuanzx.com/163leazapfq.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163giyrziub.html

Java: class User {}
来源：http://www.xuanzx.com/163dxvfsyvx.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163mxleksmb.html

Ruby: class User; end
来源：http://www.xuanzx.com/163ztrhwoaz.html

C#:   class User {}
来源：http://www.aibaodan.cn/163gcvuilfl.html

[G02] 构造函数
来源：http://www.sxryk.cn/163edhsumbb.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163efipkpqk.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163tbqciwie.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163enoaizlq.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163ukgwszgf.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163lwgygfje.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163jmslrecj.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163hwmrsdls.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163wbojqori.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163ghotqbgm.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163tgxquesf.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163ujqdkdnk.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163tbuxjihl.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163rzbczxlf.html

Java: private String name;
来源：http://www.aibaodan.cn/163mokfsyxw.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163ixkvvtvu.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163ygcjurcl.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163gxfxvwei.html

[G04] 定义方法
来源：http://www.sxryk.cn/163krcsdkss.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163nchcaehy.html


<!-- 参考信息 -->