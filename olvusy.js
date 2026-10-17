外链999!wailian999！

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163vixgzowa.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163kgefcyma.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163yfcnveqe.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163dwhwossd.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163qaonhtal.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163jqaitrxh.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163novxbojd.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163ququntzc.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163hfeeneid.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ibsbgeht.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163wzvpspxk.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163juxtflug.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163rimmjyrr.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163xjvdztes.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163qhpbdeqf.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163vftrqumi.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163eatfciqn.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163vufdghar.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163rojispaw.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163gwqudtah.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163phmirges.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163nflmpilx.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163zzxbuavd.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163ezbzrrkq.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163pzqtmpgp.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163qgschhqp.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163duipndnj.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163ecvbcuas.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163ffuuaeil.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163wjahmwci.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163hgpjzstu.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163xudqgsol.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163zaiktjgm.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163mbrwuyqi.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163kzxsgiqr.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163zrtipqbs.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163jgkkiinu.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163yabrvrtf.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163krflhnir.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163trtcrxuj.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163trtnijfi.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163ttbwvxtj.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163gwyybmes.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163ktmgtzls.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163flsftrtl.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163zwwsnocz.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163iwngamxz.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163dyhiezwx.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163ydajigxf.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163wqogskjf.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163tbhqhclh.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163dawejqcg.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163sisufvhd.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163uygzzitd.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163eqpiebbm.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163wtmniegj.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163qfyallwx.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163wcfnszww.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163qctbsirf.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163xcffvmxh.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163pynwtvqx.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163mptmkapi.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163dtnghksi.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ocnnsaww.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163itnzoofm.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163xgygxszg.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163lvyyigeu.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163ykoaxskf.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163aiuvjqxh.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163yyyujrnv.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163rhzbipph.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163ytknqoca.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163cbnlsppg.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163txsdxfbl.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163vdyeyuqr.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163kuktvgic.html

Ruby: s.lines
来源：http://www.sxryk.cn/163wckxmgui.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163tzphvxpe.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163vqikqtca.html

Py:   if not s:
来源：http://www.sxryk.cn/163jquehteo.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163bqylsyot.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163kqfntcpk.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163sfvbsgsd.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163acxcyylz.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163jtkfbfep.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163fltayjdt.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163recyzlyu.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163qvpaagrq.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163aedyuyxf.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163wdrdrtrg.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163thlpllnd.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163rzgilcha.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163iidyprom.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163gdlbeyyn.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163xvzsmerm.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163bywnyoso.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163sbowzawa.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163qdvjyqxt.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163asnbzrdn.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163xkuhtgey.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163plvkisov.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163appmnkzg.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163bkmkhxne.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163gwdktnfw.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163tcuqxevj.html

================================================================================
来源：http://www.xuanzx.com/163moawslor.html

F. 文件与目录
来源：http://www.sxryk.cn/163apuuwyge.html

================================================================================
来源：http://www.sxryk.cn/163aykllwed.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163vtfhpmra.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163bkwqivkq.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163szigzxir.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163aqwlsfld.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163kndzueks.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163wvawgazs.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163xyaafrfy.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163gwhavjiq.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163osqhrwqw.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163fsryzjpg.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163zibtcsfw.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163sdmulsvh.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163hmxfhnqv.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163aszoiqrw.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163jbqkuvgd.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163yipbsupu.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163liuvpppa.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163acqurtkq.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163fjtetaep.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163xgvmtvlw.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163cygyyhcj.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163bkprenbp.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163fwillxuq.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163gmonvgrp.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163vucacyuo.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163jopeolbw.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163adwtsgka.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163fmgeteoq.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163pphrrpmd.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163odcrnroh.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163fskdxgjy.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163lptcrzbx.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163jdxasjui.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163tsufafdz.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163mkdmaugk.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163wyxodtqc.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163ateyhdhv.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163klrhyhds.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163ewoaduob.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163hyeuwpub.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163cdgknuse.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163hirozudj.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163ywjwviuv.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163nmybfeot.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163jazxnhxk.html

[F06] 删除文件
来源：http://www.xuanzx.com/163kayczhwn.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163hwskniyv.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163tviclexq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163tbbscyoh.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163isigxkku.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163qoejgfde.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163xkanufrv.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163plemmuzf.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163lihpnstj.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163tnwzxrct.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163jpmjneux.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163zboqvlzk.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163wlohfnvp.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163uglmghbe.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163tpuxhewx.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163sdmnkjqs.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163ssimyrof.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163ifaczkbf.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163aucbmtpu.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163ltrdputl.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163ogtatvha.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163zdiafwul.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163qlrjrmve.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ivadacdm.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163maqvnyfh.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163xmzhmxza.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163wugsbmnh.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163sqvpjnrb.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163ptvkzifi.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163zppmqohw.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163vxaplwkc.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163teanjmss.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163auuuwcyw.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163tgnruzck.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163lotkeizh.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163djkrmflg.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163tqrtyanw.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163phtsnzen.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163hrbbjoog.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163xhcrkkgo.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163hjrrymkt.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163vemayvxr.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163llnhhniw.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163uwkzwbwv.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163ofsyaknc.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163lvjigxtk.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163rwroyfym.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163zbeadckx.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163dkypiaof.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163lxrgoouy.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163gfqwsauh.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163mhttphoa.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ehwvzgtr.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163mmsczopw.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163zpkekbzr.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163vugmyfqy.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163cmirxalp.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163jahovvzq.html

TS:   // 同上
来源：http://www.aibaodan.cn/163qijwdhhh.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163qtsylwjk.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163tdfjjwgn.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163snxzuxsl.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163vbqpdvdu.html

================================================================================
来源：http://www.xuanzx.com/163oievahvq.html

G. 面向对象
来源：http://www.sxryk.cn/163acbkbxyv.html

================================================================================
来源：http://www.sxryk.cn/163zhkpjnkn.html

[G01] 定义类
来源：http://www.aibaodan.cn/163ixfkruda.html

Py:   class User: pass
来源：http://www.sxryk.cn/163sjfuzgod.html

PHP:  class User {}
来源：http://www.sxryk.cn/163pqskrylz.html

JS:   class User {}
来源：http://www.aibaodan.cn/163sllixsgf.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163sywzflpt.html

Java: class User {}
来源：http://www.sxryk.cn/163nrgdqiop.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163zqqhhorq.html

Ruby: class User; end
来源：http://www.xuanzx.com/163mtbrdqfe.html

C#:   class User {}
来源：http://www.sxryk.cn/163keqeijyt.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163mmipihzq.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163msqqpwxu.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163lbrabigx.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163cxjbovoe.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163rorhkzzq.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163xpdoelau.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163nukaicnj.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163fstnuzih.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163orgqtmvi.html

[G03] 实例属性
来源：http://www.xuanzx.com/163kgnbgfpe.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163kzjedwvp.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163tofitvml.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163rtafohcw.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163rkfeygdi.html

Java: private String name;
来源：http://www.sxryk.cn/163sfcysrxf.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163xfirtbbn.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163mlqqrcrm.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163jmlqpcpc.html

[G04] 定义方法
来源：http://www.sxryk.cn/163ppjkyype.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163rtqkipng.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163mspxceyh.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163rmujslkx.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163zygyzuhs.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163nbzhiubt.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163pwscowvy.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163whkolymv.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163pyokldzq.html

[G05] 继承
来源：http://www.xuanzx.com/163fzkedgls.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163xwmmpjmz.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163abrnqzrg.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163csrrsggd.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163nnwohwyg.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163svtkdiiu.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163vgrphuvv.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163osmzpozm.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163ibxvninj.html

[G06] 重写方法
来源：http://www.xuanzx.com/163sjnrpajz.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163vzdbisxh.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163aosmrhvr.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163rjuzlvhl.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163abvxbrjj.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163otokbesw.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163fbvrznzv.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163zadyuhao.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163xknyymnq.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163yfbcootd.html

Py:   super().greet()
来源：http://www.xuanzx.com/163jlddhvsf.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163ycqikjgr.html

JS:   super.greet();
来源：http://www.sxryk.cn/163otdjtkbp.html

TS:   super.greet();
来源：http://www.xuanzx.com/163thbmjdpd.html

Java: super.greet();
来源：http://www.aibaodan.cn/163cefnhuho.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163lqmxteng.html

Ruby: super
来源：http://www.aibaodan.cn/163nmqhhjsm.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163pctckmfy.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163cikmvjed.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163veasxcna.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163wiiuhxoa.html

JS:   static f() {}
来源：http://www.xuanzx.com/163qegmozvl.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163dgzdnzit.html

Java: static void f() {}
来源：http://www.xuanzx.com/163nrgwhztp.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163bgwvmgin.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163exfrmkhc.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163zyeatjlj.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163qufxdpls.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163rfaupygo.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163esulggln.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163hmmmwszq.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163tytnevoi.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163otwuspnt.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163aakitzqf.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163flqpvdzb.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163xjjazmmt.html


<!-- 参考信息 -->