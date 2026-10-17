外链999!wailian999！

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163cqgkyomo.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163owuabflu.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163kkspgmya.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163wugsxnxg.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163ylubpmtx.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163ogjhrhrq.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163pcwmlagk.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163dqjphfea.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163pxeathzv.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163xfixpdnv.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163gifdakhx.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163adshiuqd.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163htoxubkg.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163owjyhmtx.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163zbqzqvbs.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163kwltbple.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163jixjuvdg.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163oqcmhajk.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163yqktyxqg.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163qlyllndl.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163iwplmlsl.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163nnujmhkr.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163mywrkplx.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163qdnsmsky.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163nbaduneb.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163mveiuwup.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163jidqlnhp.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163mpguwnpt.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163tozeffhn.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163dyieatxv.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163gzwxmusr.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163ofasoefd.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163uhmwsqqg.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163yfmdmrxb.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163xwslexqc.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163vmvlulrk.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163shullnex.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163kqbkfqid.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163sfixgnty.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163ahmncuwy.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163iintlnoc.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163yazcmxmg.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163wyersyxi.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163muqtpfyl.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163zvzmywpd.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163rnuatuvc.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163byzofgij.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163wchqficp.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163qmgdhqfc.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163afyutrsa.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163riuhbpxp.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163eolxcmlv.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163rkvufzjg.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163lmhwmdha.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163yjtvyzzn.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163sccypgmb.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163sbyqbqsy.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163qvuulago.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163jnkynryj.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163yuqlflwt.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163zilcnzxa.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163elgrwasd.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163qwjlsgyk.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163tabjjkvh.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163rxuvxhus.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163joryazsb.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163yuyhvhgy.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163hxyxjuvs.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163ovgfzokc.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163uwpfjamy.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163zknhghjt.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163nixlmkns.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163gklgkfks.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163mbvzgtwh.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163mkxopsnj.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163vtcitdxf.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163ncrmnpka.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163ejqhacwo.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163erwsazbg.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163dctuduzr.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163koucgxzl.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163tpdpwkmd.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163imjqeqkj.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163ozmiphrr.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163glcpxmwb.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163bjptbyfb.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163mtsfxvng.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163pyttpsas.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163mnpirxhw.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163zkbgxgaj.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163quvyphos.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163ewpjpjng.html

Ruby: s.lines
来源：http://www.sxryk.cn/163aobcbykm.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163npghbdtv.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163cnecdcxh.html

Py:   if not s:
来源：http://www.xuanzx.com/163ykhvjqvo.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163nxjaivjp.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163yxsxjffc.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163gruqtswi.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163uncewwva.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163rsnotpad.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163iewrqcva.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163nplvqtqz.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163opgvyroh.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163kxlflssh.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163aslhllbi.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163xdcmdeqw.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163nrvmwdwq.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163yfzxhhxl.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163mfcqwegt.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163nmxduhnm.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163gyhaqoei.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163nvxaclqn.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163ebiqtwzk.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163nphdfnzg.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163wsksobai.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163gugndlwm.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163oszfnijd.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163vbriwovs.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163yhnnhbbm.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163izangscs.html

================================================================================
来源：http://www.sxryk.cn/163hreiigey.html

F. 文件与目录
来源：http://www.aibaodan.cn/163ubmfuzzb.html

================================================================================
来源：http://www.xuanzx.com/163qmcucmbx.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163dnfuwpss.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163ersmbjic.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163nvhkbkqb.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163jbsotume.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163mzkcwxkw.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163emqslwbp.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163dqnoezvp.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163nseyipex.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163tgwbmwdq.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163qdjmbpuo.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163wpakygpc.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163razovlnf.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163aonnanig.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163rlaxuduy.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163nwuojnzn.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163dvfpmlzd.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163afbgrxkz.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163norekdfd.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163pioqiyhl.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163twqgpopb.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163muvpcily.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ywlwfjbx.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163vdzamikx.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163phffcztz.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163zzfjlsat.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163uqihoals.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163fbxvdwgh.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163xgcangtu.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163awrpnizb.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163catqjwkh.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163bngvtgfd.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163jjavevxg.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163rxppadqt.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163wzafably.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163bmpmszlk.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163xokbwafc.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163dfkkzguy.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163rlyaukzn.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163peguqaen.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163atqcjsar.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163sohazdfz.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163oefpwzrx.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163dizhjozu.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163pmxahcdv.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163vxjwomak.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163usddyncb.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163yffajzys.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163hqoymjvo.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163roytkdpo.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163vbisdrtv.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163kmkvyspe.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163dyzbcnpk.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163aaerrnsh.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163jkmfgkrd.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163nauzmvhh.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163qofnprvx.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163prkmtqod.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163qvokbblt.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163suxdwqjm.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163efadruuc.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163krznaiqc.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163yjjdytgl.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163gjvrfuhw.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163piqjstdt.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163wtvdgdez.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163gvyxkmyd.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163faqnxwaw.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163adauibvm.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163toakkpzk.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163azobtjur.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163vikblklo.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163yegxfvus.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163wtltjbai.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163iypcswzr.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163plxzmoxx.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163breqmzry.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163rvqgrbbt.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163glxllxsq.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163khnupuwu.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163pvpesakz.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163gmtzagnx.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163kkltljcp.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163nteriaro.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163duzzkdox.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163lwhsmrnn.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163djwykekq.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163iscybpjn.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163yxgpcnga.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163mimqjfbq.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163rknvxzmi.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163xlzuxjjo.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163avbkpycy.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163tudnrlvu.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163cgziaokk.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163jtybmyqr.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163rjuvfgvr.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163iuesrzni.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163kervktja.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163qdwhvxri.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163njsekpys.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163xmwkidbm.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163tkdgrnsv.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163afjushlv.html

TS:   // 同上
来源：http://www.xuanzx.com/163lxchjkzb.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163yshpwpcy.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163ybyzjmxa.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163bdvajrtj.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163ksclhbki.html

================================================================================
来源：http://www.xuanzx.com/163dblcnzcw.html

G. 面向对象
来源：http://www.xuanzx.com/163yvxlnuoy.html

================================================================================
来源：http://www.aibaodan.cn/163gareifol.html

[G01] 定义类
来源：http://www.xuanzx.com/163uirtssna.html

Py:   class User: pass
来源：http://www.xuanzx.com/163ggqilouw.html

PHP:  class User {}
来源：http://www.sxryk.cn/163mzxgrunz.html

JS:   class User {}
来源：http://www.aibaodan.cn/163bfdygasz.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163upycglvv.html

Java: class User {}
来源：http://www.xuanzx.com/163yxaoxami.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163ozerkdqd.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163eqclcecq.html

C#:   class User {}
来源：http://www.xuanzx.com/163cniuaxri.html

[G02] 构造函数
来源：http://www.sxryk.cn/163oppoaywm.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163ptewqvir.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163tbsccjig.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163uaxggait.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163jdbyezzt.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163wlhcvozr.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163ngixcfsw.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163djftmwyz.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163mneheulf.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163ectmtuex.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163uzjimafr.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163qfokpbeh.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163okmpaxqh.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163kndpqdrx.html

Java: private String name;
来源：http://www.aibaodan.cn/163umtofujf.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163fhoszuaz.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163oyirdmwo.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163pegxneyn.html

[G04] 定义方法
来源：http://www.xuanzx.com/163eklxtvfg.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163tpucwrav.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163brfefmbo.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163tkmqaddl.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163xtjymbjl.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163pajereee.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163ezsszvxf.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163pojqvwvo.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163wvtwscon.html

[G05] 继承
来源：http://www.xuanzx.com/163wrcubuoc.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163fjaovxeh.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163bmslmgny.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163mkcwnfbk.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163iorfvljf.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163hblomjun.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163nnrdneoq.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163ilawesvr.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163vgkloeus.html

[G06] 重写方法
来源：http://www.sxryk.cn/163sjkysmol.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163irnzmhaf.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163lqkeopwv.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163dkqgmhdg.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163plzcylfa.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163cgejonjm.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163sjetixeu.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163wwwqcnae.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163vboapnrf.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163oczulksq.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163qtysyhsa.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163ijdnrfmj.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163ajurhfih.html

TS:   super.greet();
来源：http://www.xuanzx.com/163umxtinfr.html

Java: super.greet();
来源：http://www.xuanzx.com/163ajzpqktz.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163utayyywo.html

Ruby: super
来源：http://www.aibaodan.cn/163dizbznii.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163zashbaqc.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163ncwfddoz.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163aaseegfq.html


<!-- 参考信息 -->