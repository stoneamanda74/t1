外链999!wailian999！

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163ovdeobaw.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163oogllaav.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163kkuuqljx.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163nfqcswsc.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163tidooldc.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163zauylpaa.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163kpkomlsu.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163bphfdcvv.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163jojdotwm.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163mznotjrk.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163mjnmefje.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163rjtenkme.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163fdevlrny.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163xchpiwyb.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163onxbmyab.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163fhlwkfkf.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163vttmyjui.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163opykmehv.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ofcyqdqx.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163xoqifxep.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163lgsrqnnm.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163stgpcopw.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163mnaazzjd.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163fywlbiei.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163qvzyttvx.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163iljsgmaa.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163spiokqhl.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163rddazrzv.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163qnnwsbtp.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163qmcalrsm.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163phnbmsbj.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163xsobnlcv.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163phgglfha.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163rbwlbrrn.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163bghmtawp.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163dongqgkw.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163qucyeidf.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163xabgjtub.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163ivsvvprq.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163wzfrenuy.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163fnqerhxh.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ajoebrfh.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163qjjooejf.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163pzmdcvub.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163gdlmdoaq.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163volawvkj.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163vnqahusc.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163enebarqd.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163iplvnmte.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163kyrymgfo.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163zxqcczjo.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163ktgsbftw.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163vgjlokfw.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163xmzxpjbs.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163cdycybnp.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163vimqintr.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163kzgannjm.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163moiyzhao.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163egefscsg.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163swksefwl.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163djxkpceu.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163sbaiyvyb.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163xqbfcfva.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163wxzykmoj.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163nyvrwepb.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163pjaasmzy.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163xjklmnsz.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163ntiyegnc.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163xsdtwdts.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163rlbjtbvn.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163dytikmeh.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163pqqiyszc.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163qdryhhwh.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163uoibyvar.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163vdncolwh.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163agfaaghj.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163ihbsjwiu.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163fezirzmn.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163fjicomwe.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163ngosoixv.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163jzmgdyzg.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163tvhfoqjl.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163uszexxye.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163inspbjgn.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163eqsqdbpm.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163mxjntehw.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163mkhqmtri.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163tamvtxmg.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163ufsgpfhy.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163jxaawvpp.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163dskvxygj.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163dlrrevil.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163lmsksbpv.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163zfqgxxjb.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163efhevift.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163frfqcjlb.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163ctlkbuba.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163gopsgszo.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163nznzirrs.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163fbckvbff.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163eacuedrh.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163qslocrws.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163xyparahw.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163lofeipbb.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163jrtiuslu.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163mjrtyjop.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163tyqnpomv.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163ajskeglk.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ervnvzdn.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163kfxknhmo.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163ujkylsop.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163lrfrpzdp.html

Ruby: s.lines
来源：http://www.xuanzx.com/163btspxxry.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163podqohpy.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163awvkxwki.html

Py:   if not s:
来源：http://www.sxryk.cn/163qiohlbpt.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163prhdrprt.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163ipanatlx.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163uwqmjrir.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163zsettlrp.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163rqntijxa.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163aofkcxys.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163mdwlnzaj.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163xjouxuag.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163whnwzxwb.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163qilvexra.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163bwrmowio.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163icmghviw.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163rpjwemsl.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163ropetouw.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163omjtlbyc.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163rjyeftij.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163durgnskw.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163wplhktgq.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163wudbkazq.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163rkadlkjm.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163qnspqnce.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163ihexqbbh.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163bldhzryq.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163nlfwjrzw.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163xqsfunef.html

================================================================================
来源：http://www.sxryk.cn/163lpntwqji.html

F. 文件与目录
来源：http://www.sxryk.cn/163jfwencot.html

================================================================================
来源：http://www.aibaodan.cn/163yrlmpbsg.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163vubxahci.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163brwltuws.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163wjntsyvx.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163iervanxu.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163szzvuqqc.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xxtemcwz.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163ozrivgbh.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163jgsgwomq.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163lgvkjdbz.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163fcntymvo.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163nmayfets.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163dthclfcj.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163ouznnmkm.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163dqdbkbdy.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163uoeogvpz.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163uclttkrc.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163ettuqqug.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163bdfngotb.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163fvfsgivv.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163gqzmihps.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163xpvifekb.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163dlsytpcm.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163fcaoflnw.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163yuiilcdd.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163azwjejsu.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163yglzaqgj.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163ngbriyzt.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163mjitfsww.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163ozwodnot.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163hfcuozup.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163cueqqjmr.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163crwuycwe.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163wqdmuxzz.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163rrkfrpdo.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163uqvmsrmc.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163gwzyetml.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163gjnqkmeq.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163dbxqpitw.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163etoyejwo.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163duttvdon.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163rudhbuoo.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163tidnowyv.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163bzqqeiag.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163fsatimhb.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163jeukmvxs.html

[F06] 删除文件
来源：http://www.sxryk.cn/163quqzytnm.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163hxnlpvbn.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163jyuqudkd.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163zsbjbfqp.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163bgkvelzn.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163hippwabc.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163coktnqnv.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163yyucrkce.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163yfumtlai.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163iepuxuho.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163qrhazhga.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163rfhgnvhr.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163onvmqfmy.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163zrsezhtr.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163tvhqmqmi.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163mhbvuotd.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163dnprufdm.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163bmwiegvr.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163celkvoix.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163akofalsx.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163ilnzrimg.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163rwnarbak.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163owyukjve.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163wlmyweau.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163rnvnhgcx.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163enfytrye.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163nqjtcpgn.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163akpcezre.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163kilolhgc.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163dorfbquq.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163yshgbwme.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163mqlriuzh.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163kkygwhyj.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163hspcpfsl.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163rexmpkhj.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163zxxzkjty.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163urklajja.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163adexzycs.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163qgcjdrmr.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163vdnxzseb.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163mikxlicp.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163npzzlmpt.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163bpgclatl.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163muskrztg.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163pkdnpgzf.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163qriophcf.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163iahzikgx.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163bwpovwvd.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163uigfhesp.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163iqphtmrf.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163enkyrhnu.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163eweivbno.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163olwnjopv.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163qstorbca.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163ekudarsq.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163oyezulle.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163euviotau.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163tqaeqonr.html

TS:   // 同上
来源：http://www.sxryk.cn/163juvypdsc.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163wphvvafl.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163qcnzylna.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163iqgkkexc.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163hwlxnnyw.html

================================================================================
来源：http://www.aibaodan.cn/163tycyctzj.html

G. 面向对象
来源：http://www.xuanzx.com/163yoeyzfsx.html

================================================================================
来源：http://www.aibaodan.cn/163ivvfaahu.html

[G01] 定义类
来源：http://www.xuanzx.com/163coiqznmk.html

Py:   class User: pass
来源：http://www.xuanzx.com/163umpzyaqh.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163jevxapsk.html

JS:   class User {}
来源：http://www.aibaodan.cn/163iqyoalxr.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163uewaxxfe.html

Java: class User {}
来源：http://www.sxryk.cn/163obdwwtwl.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163glelsbtt.html

Ruby: class User; end
来源：http://www.xuanzx.com/163euvycyrd.html

C#:   class User {}
来源：http://www.sxryk.cn/163rlkinhue.html

[G02] 构造函数
来源：http://www.sxryk.cn/163vdbiguvb.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163lhboopwc.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163bpqqbxel.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163nlkewlge.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163froynrwq.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163tpfqcldd.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163jeqyizgl.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163qyzjmusp.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163liztmrww.html

[G03] 实例属性
来源：http://www.sxryk.cn/163mjskrwyk.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163fngqislf.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163wbrxolas.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163qwevalxn.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163ttoafscp.html

Java: private String name;
来源：http://www.xuanzx.com/163erypwkqp.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163soemfdar.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163iacvjbcy.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163hulxelyc.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163lygwpexy.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163lljdirnb.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163kokwkooc.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163gqyleaao.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163reuaewjw.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163cwekohbs.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163nypcgpjw.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163nnqxmhsg.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163rcebkvor.html

[G05] 继承
来源：http://www.aibaodan.cn/163ncgwfxqg.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163hupqhrdz.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163uxkryrib.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163vxbqaomd.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163zzyismfs.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163nralrqwa.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163dfgklwlw.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163pcmgnydy.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163himlsfmt.html


<!-- 参考信息 -->