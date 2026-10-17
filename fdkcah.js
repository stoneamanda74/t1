外链999!wailian999！

Ruby: s.reverse
来源：http://www.aibaodan.cn/163rjsjrbcm.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163eragspno.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163fnjviolb.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163kkbqotqu.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163idybvcqg.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163hdizkzxv.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163otbpupsx.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163ueilyzav.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163dduqiijt.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163zpszcqxj.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163buujyzcx.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163ibdnbzjj.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163owftcjrb.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163tnkdxdqr.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163nvxvtcim.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163tfazvoku.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163lwcdtxgx.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163cmqtbbjs.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163ebmvoxxe.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163zeawdqut.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163vpctoyym.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163erypllob.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163pvqqcncy.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163dmxknxbs.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163pbcfzjix.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163nevfjscm.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163elmiixyd.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163rcwfjbcm.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163ywfzmafr.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163jvmpxxoe.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163yddpvpwa.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163bntrnaoh.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163zdjmogtf.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163bzvnghbv.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163vbofelno.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163rwwoinpc.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163dmfbugxp.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163rkrmvkms.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163mkhrwmho.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163hygaltmh.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163bikzdbgo.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163wxzpvklu.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163turkawhg.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163yajrtzpl.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163zkfbpdxi.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163ilqduxww.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163itvwuvjj.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163oswfypdg.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163pajzjolg.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163zvqqprgt.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163odhaqztn.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163lmkrkylj.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163eyxoclxh.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163isemnlqr.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163oojhjgnc.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163xnkcxfyg.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163lfyxjjts.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163zdfnmmdh.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163brwrpnpj.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163djulcqda.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163onqoueex.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163mzvzrlmp.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163cfnqjubf.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163mlrcgyxk.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163jvcdhqpy.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163arllkzjq.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163jsvdlrxw.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163fvbovzda.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163xddpyquc.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163tjkbchyl.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163cppzsqin.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163ofsohcjz.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163nkfofpda.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163yhybtobr.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163sgmlvysd.html

Py:   if not s:
来源：http://www.aibaodan.cn/163qfvgobph.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163rnykemqh.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163hdlowznt.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163lzplafps.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163onyeblbv.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163dtaqfbsk.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163yxdyniqr.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163eogmtalx.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163csamrjbj.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163kekzibpn.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163fdkbvtdw.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163lyugpshs.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163lgnayrnp.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163eamvwmwi.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163ussgpgsc.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163wyaddvzf.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163ziavvpdo.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163rszzshym.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163utapkmmo.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163huqsilxf.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163fpwmwzdg.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163cenwmylc.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163awiueggs.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163hpstceeq.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163qzkbqufl.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163kleiddui.html

================================================================================
来源：http://www.sxryk.cn/163whovzjwx.html

F. 文件与目录
来源：http://www.xuanzx.com/163zgpqwkko.html

================================================================================
来源：http://www.aibaodan.cn/163xlhinzvk.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163dtkospbn.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163tdpfrmuu.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163pamwkvwu.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163oiyydauz.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163lakbfhaq.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163yewioxkp.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163zdojmtwv.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163fnhhoofk.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163rtumqukf.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163cmzlkaqr.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163utsillvj.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163bqmviygo.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ovaekrmk.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163juvrobcj.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163nrqdnsxr.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163mhrutkbx.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163saocgykh.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163ldctsevy.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163kejopwdg.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163ozdxzkhj.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163uierksan.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163dhxzxhnf.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163akbwkfsl.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163waofjcuq.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163uabdijhw.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163pcdxckio.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163prdozuuw.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163yplhbdan.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163tnwcfspv.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163vnrelrfa.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163xdgafufb.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163gaguhpyo.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163jzydeozm.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163twbjlyfm.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163ggigxzst.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163peszwqyv.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163aatqhsze.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163hapsidpx.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163shnxevhv.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163cgwofobl.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ecflvpau.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163gynwqvby.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163cnrzhvoy.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163qxbcxbyd.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163ayhktpcc.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163sqbdxxzo.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163czhomglu.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163unaczrkd.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163mosuwpkw.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163qcktnaub.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163xqkmfvam.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163tpoemhsp.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163eqnixmsu.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163wxjqtwtx.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163zvxxmeyp.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163jsjcehxd.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163ipiprjho.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163hwharbpe.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163gwlsjwed.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163gfonbuct.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163pqmpxmua.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163zzjyfvjb.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163mmvwqukj.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163uzgkmgiw.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163jzhnffna.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163yhixkfbw.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163tibtjypa.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163gylwwkea.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163dwjbthqr.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163vfgpxjvv.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163zwadxsnn.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163yjzxaadj.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163japuovvq.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163qcjfrtjo.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163urstgxey.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ypkvemvb.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163rcchynos.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163cerywwwp.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163gflmoehb.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163xbarhnms.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163nbvmgtrd.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163vmrvzyyf.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163psgjngza.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163cchulylj.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163iqtuqcol.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163crvtlckl.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163xyxwkvxo.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163eogqxoiq.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163jugkooxx.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163xjasglvc.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163scszapdd.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163calrorsp.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163ybuofvxm.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163dpmuwnnq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163trmazgcq.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163ziuxxwbm.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163wagefoff.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163vmpsakwr.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163ukvxfqrc.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163zwvqwlxm.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163vqyllmxa.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163eklrwjqx.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163gmkdjisj.html

TS:   // 同上
来源：http://www.xuanzx.com/163dbtghdza.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163vxklajtk.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163wvcykrxm.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163afllluoz.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163kxvyxmqg.html

================================================================================
来源：http://www.xuanzx.com/163umhaldsk.html

G. 面向对象
来源：http://www.sxryk.cn/163emsanwsj.html

================================================================================
来源：http://www.xuanzx.com/163ffdhxdzm.html

[G01] 定义类
来源：http://www.aibaodan.cn/163wqqndcwn.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163kutrugrz.html

PHP:  class User {}
来源：http://www.sxryk.cn/163dhszsrnl.html

JS:   class User {}
来源：http://www.aibaodan.cn/163ettihopa.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163wbctopaf.html

Java: class User {}
来源：http://www.xuanzx.com/163havnnsbu.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163jsaogztm.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163htslsfie.html

C#:   class User {}
来源：http://www.xuanzx.com/163skoncgso.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163ibhlldje.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163xyejxvje.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163tuztzqou.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163ynpovtye.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163fnvpgbno.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163zzjthrie.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163gxofdthf.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163wstnqebq.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163trquvnen.html

[G03] 实例属性
来源：http://www.xuanzx.com/163mgewndmj.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163fvyzyapc.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163dasjjpvr.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163doybmgjr.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163uhuflbhm.html

Java: private String name;
来源：http://www.sxryk.cn/163jthlzqah.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163hbamgwzi.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163ffsjwxlm.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163rfwaovvq.html

[G04] 定义方法
来源：http://www.xuanzx.com/163sjhrwcjb.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163pmkgdkoi.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163usqhcygx.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163egcjwmyl.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163ofowswqk.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163kjjtuyuk.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163eikxxqbv.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163kfewaufb.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163uqkigkmr.html

[G05] 继承
来源：http://www.aibaodan.cn/163irskqrma.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163ttzexgah.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163eyiskzxk.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163cwcukqoz.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163zuhjubac.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163nzzvvpzq.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163pveaqele.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163oshmxiiv.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163wfjlrydr.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163cfkrrpmg.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163xvmmxvxa.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163oixgaznh.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163enwfgskp.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163fwztxlqg.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163muwnpdol.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163xwrxgqza.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163ongsaqal.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163kjqdikam.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163ribeiley.html

Py:   super().greet()
来源：http://www.sxryk.cn/163ynvxinvx.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163hujjhkyg.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163vsvawydm.html

TS:   super.greet();
来源：http://www.xuanzx.com/163wnftmqkk.html

Java: super.greet();
来源：http://www.xuanzx.com/163xmzogxpg.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163vzdtjnqh.html

Ruby: super
来源：http://www.sxryk.cn/163qnybqbmu.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163ibqcjydi.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163bxeeucfl.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163vmjfnzna.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163aclydncn.html

JS:   static f() {}
来源：http://www.xuanzx.com/163wkhawydu.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163qvrflpml.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163tmdbrmrt.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163ydqsduqc.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163xzhhitdd.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163pdivhhbo.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163bashykrn.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163deoaekkg.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163byhszlul.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163rcxcspsp.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163jpmjxlzl.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163fwgxhngh.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163cxhccril.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163gtmsrirw.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163mtyagzmz.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163gmxkvkht.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163klgpzpmp.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163agojfxbx.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163ffsosfwl.html


<!-- 参考信息 -->