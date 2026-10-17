外链999!wailian999！

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163jfzpidnr.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163cycdvspk.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163aqffbxwe.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163mattoaos.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163klfjznyz.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163nrftigan.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163tkmlmwwo.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163hrtqazut.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163chtngbkv.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163hrbsvpji.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ilgtotwy.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163njljrwko.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163pktsglpc.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163muzqqwbd.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163tjtcsvip.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163yvdvijnf.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163xorfsjbq.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163aancbkbu.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163hiyjuuso.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163grxjoroh.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163coljhazw.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163mlvxxcas.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163gdqdersk.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163trjrpkaz.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163jjquzgdb.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163bsgkdfdw.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163sdljhcjq.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163dxklhcft.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163dhltutne.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163jrjnyphu.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163aydplvwz.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163cdclzykl.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163sfeoyjeu.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163tqpmhehl.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163wvbtepmr.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163ljagaice.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163xegcaimu.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163cmkgghgl.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ktrxrode.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163yxemiaun.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163syliocax.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163mhfujflj.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163rxicdltt.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163ykzukble.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163mgcezqng.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163lvcrnhwe.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163scjytbpj.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163umgbqhts.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163jxzcqnpk.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163pshtgoqh.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163wcgefvdx.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163vqsaldtd.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163kqlmtsvu.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163bargrvnf.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163ygiifhqa.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163pnjsaoog.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163gwdlnsnl.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163hjocoaew.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163bjjeoiym.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163hstzhbib.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163yugtnpwi.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163gbufrmiv.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163xcblumsr.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163luwzzyae.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163iqgqcmvj.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163dvdeyfwx.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163ungbnpwm.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163uakdlrsk.html

Ruby: s.lines
来源：http://www.sxryk.cn/163xgcwovio.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163npolaqre.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163egdkjpor.html

Py:   if not s:
来源：http://www.aibaodan.cn/163tuuqafpo.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163gbgbobfs.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163lwfxjsrd.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163qcimzdzj.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163zizfqzqb.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163rhokyifq.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163jnixocgr.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163xwdlmkma.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163ohnmhvvo.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163nsmpkkqy.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163zurxdgqs.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163zbiwgbpn.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163schtxriu.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ruwaacmm.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163bflgvpzi.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163bmpfutes.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163efocbkzv.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163bwrhybpi.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163wwnfpbgr.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163tbucjcsf.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163azhaqkju.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ghtfisup.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163pbmezjmm.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163pqkazxtk.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163ubzjvznl.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163srqxcjev.html

================================================================================
来源：http://www.xuanzx.com/163ckxiwhnn.html

F. 文件与目录
来源：http://www.sxryk.cn/163jyvfxakc.html

================================================================================
来源：http://www.sxryk.cn/163udzzlvlx.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163odqhvbqd.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163znnnhqzh.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163yxlxmhgf.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163wvnwvbfs.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163lpcetsxd.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163hbnrlffc.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163jlmzjxio.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163xthugzwk.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163bgumjbpb.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163wjhgipuf.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163wwrhixhs.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163jsapjres.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163hplizkia.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163fatumhgz.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163dydjnpkb.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163ewjbksta.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163xgzdwzwc.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163hkuftlfc.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163pwtxssty.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163gqatymnv.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163hstnlzie.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163pzwuajme.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163hepolqpl.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163zkgepjii.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163scpwyvft.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163vuvlkfwb.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163mpwspxoy.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163ffjvzapx.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163xmqbyrzc.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163livhnyhk.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163jxfwkhss.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163fbgbqpcz.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163mtbkgytl.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163czngalfj.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163wbrcrflu.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163promborw.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163fcsxxbrc.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163bfijeaoz.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163fuimkrlk.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163lnrfaznh.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163glnszydq.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163iibphhjw.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163vjtgjobo.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163zslzysyv.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163qcauqcyx.html

[F06] 删除文件
来源：http://www.sxryk.cn/163qlujdmue.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163bgjefuib.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163zvxpqipz.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163wgqeeywp.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163jttjlzge.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163nqrurnhh.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163dcumfhju.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163qurwowpp.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163ldfkjldi.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163beuthirf.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163kbqxkdfe.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163jmopuxgw.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163gkmxfbxf.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163ngphbfow.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163klpixnxv.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163bsdofcsc.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163ysuibwmz.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163uwczwpey.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163djrixigh.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163mfkljena.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163mocqydfj.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ynjjveve.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ggclaycj.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163mxifjstr.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163hpcarxrh.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163zonvtgdr.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163jynwzicg.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163slubeqqn.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163oihvyxot.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163bruxsmzm.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163lauqoncg.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163fkrgrbal.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163nuenyzij.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163fsozdvyd.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163nnbaiumx.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163ajblyyyi.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163nxtlusgc.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163cfnheyng.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163cawexhpm.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163aeovysnk.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163lodhsyma.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163vaobdrqj.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163hvnyotqt.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ffmkyqnz.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163iyrefafq.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163xuzqyzfu.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163fuefqxde.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163cvxwqcge.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163yqlgbnqe.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163jiapsiru.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163plbhdofg.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163cbezuhcz.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163jmcvsqmt.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163ptextmdp.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163mvzkcjqu.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163tujqxlxc.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163mzzxpetn.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163ixdtmnxt.html

TS:   // 同上
来源：http://www.aibaodan.cn/163cwfujgah.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163ktbinqdy.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163bxtlpruo.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163gvutdmra.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163uffyujky.html

================================================================================
来源：http://www.sxryk.cn/163akuialeq.html

G. 面向对象
来源：http://www.xuanzx.com/163zsmpkdjx.html

================================================================================
来源：http://www.aibaodan.cn/163iqhqlzbc.html

[G01] 定义类
来源：http://www.xuanzx.com/163ctfbcsml.html

Py:   class User: pass
来源：http://www.xuanzx.com/163ozxyeqpy.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163abxcbejz.html

JS:   class User {}
来源：http://www.xuanzx.com/163bacupvno.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163kofxiyic.html

Java: class User {}
来源：http://www.aibaodan.cn/163dqiismsw.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163krbaeqok.html

Ruby: class User; end
来源：http://www.xuanzx.com/163gxepmwrb.html

C#:   class User {}
来源：http://www.sxryk.cn/163xqewtasg.html

[G02] 构造函数
来源：http://www.sxryk.cn/163wfrxuybb.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163hroaszbo.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163gtmyqqpw.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163zqhoqhkn.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163sqtifisn.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163hlxmuwql.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163zvkpumpb.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163icsisamv.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163szgkbqub.html

[G03] 实例属性
来源：http://www.sxryk.cn/163snilhmks.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163gwishida.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163pxhgelcg.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163ucqjitgn.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163khkxteft.html

Java: private String name;
来源：http://www.xuanzx.com/163afeecnhm.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163oythxknv.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163qegeblfv.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163updyjylu.html

[G04] 定义方法
来源：http://www.sxryk.cn/163wybdtmzi.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163ebonjntz.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163sfayxrgu.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163baxlexkl.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163pwvgcmmk.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163yzctvudu.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163wbaynmsw.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163uetiqied.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163eghkjtwv.html

[G05] 继承
来源：http://www.sxryk.cn/163ilfaiytt.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163rqkhmnti.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163gonqzfgm.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163voiviycl.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163cmqhxfxy.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163jtvtryli.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163urfclwzs.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163huxkydcz.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163wysiyhpe.html

[G06] 重写方法
来源：http://www.sxryk.cn/163zxrxxkjz.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163mvukwayy.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163eopfdtez.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163tehmleji.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163iquqnqta.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163winanqkx.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163gtkiktvc.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163prtbtcnl.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163wwsfbcqu.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163oozhbwmc.html

Py:   super().greet()
来源：http://www.sxryk.cn/163jormxins.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163cdzilivj.html

JS:   super.greet();
来源：http://www.sxryk.cn/163jtbpifrd.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163ftgqikmm.html

Java: super.greet();
来源：http://www.xuanzx.com/163gjvlbdoo.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163jgpvasfm.html

Ruby: super
来源：http://www.aibaodan.cn/163irqpnxeo.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163rhbwleyq.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163rgjcqopo.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163jkjxmohg.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163lpkgntge.html

JS:   static f() {}
来源：http://www.xuanzx.com/163sgrpmjel.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163mzrgqdml.html

Java: static void f() {}
来源：http://www.xuanzx.com/163wreapyun.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163kevkslab.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163bexwtmut.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163zqoxsfju.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163ehqkgqud.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163zdvbvrgp.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163uulmpoqu.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163xqdvorjk.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163ewnzxcgn.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163uljpqyrt.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163prztbvwb.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163pqokozoc.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163jtnybqqw.html

[G10] 访问控制
来源：http://www.sxryk.cn/163fatqgbvl.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163eiczwtuf.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163wluvpybv.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163fvkhbwsk.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163vkbnttqg.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163wrptpfaz.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163grpcibqd.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163qwtqxzib.html


<!-- 参考信息 -->