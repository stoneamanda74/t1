外链999!wailian999！

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163lnyqdvdk.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163uecqzeey.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163zchuebkt.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163bhbwznjc.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163yzadasqf.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163ajuegdpp.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163uuwrvmed.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163hnjbghys.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163tkxaxqsn.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163viqlopxc.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ngubodei.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163jysihhzx.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163hszaoqmv.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163wjqudjon.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163ndzuoeko.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163ucwxnqxs.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163fvrouagh.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163hvmmgpmk.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163wgghcoba.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163qtomevef.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163eiueinsc.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163ovghezfi.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163pnkthjcm.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163lawieytr.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163wcwtjclf.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163fnfihalg.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163aheukxck.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163tutaacob.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163rpiipscj.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163qxjkgqjh.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163bncfhkwv.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163youqbebw.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163iwhhxpgg.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163xokpxrdh.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163rglgdbll.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163cqggtpms.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163ccktdlhl.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163cmmoawpg.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163pvekpghj.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163fywxhlqk.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163tdmjvvuc.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163ghnwhkxs.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163faghljii.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163cjrnrwfn.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163qnszmjka.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163swnvotps.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ceoufpzv.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163wmhyujsz.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163llanxdmz.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163akgaefsl.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163dwrkyhzm.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163gdkqtwjs.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163quuvuoxc.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163ibesyqlr.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163tcennoow.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163haolhlyi.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163jmxbgjpq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163tymjbzaa.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163xnlqsjtp.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163wiezgveo.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163qmaobbjc.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163xgthjysq.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163pvaafgmk.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163qfdwduji.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163dpxpiczb.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163wvwopuop.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163ceofhrka.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163eoemjsxd.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163yrakfmwl.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163sqbknxcq.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163fdsrtnmt.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163msqhwbwq.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163iwthyeiq.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163pnnttjaa.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163qwbxahkq.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163cypqzxlu.html

Ruby: s.lines
来源：http://www.xuanzx.com/163kkuvqlho.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163olovakgc.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163ztpelwxm.html

Py:   if not s:
来源：http://www.sxryk.cn/163wehbzbvc.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163bphwqtpn.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163lamzrruk.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163jwgmcpzi.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163ctwuiuii.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163ewolgeaq.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163ckvksjcq.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163egpiymsu.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163gyihhzcb.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163qwozrlop.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163vmdpryjn.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ibdicdiu.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163dbkdynlr.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163irixzcdk.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163muwrpitu.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163yaruoukq.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163vwweirun.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163bjpevjkj.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163jtciqllb.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163croxnivp.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163dlinysao.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163jawxcqzg.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163angtutbm.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163tsqhruhm.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163wxorkmpv.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163zdcijytm.html

================================================================================
来源：http://www.xuanzx.com/163sywfjzvq.html

F. 文件与目录
来源：http://www.sxryk.cn/163ryjghxjj.html

================================================================================
来源：http://www.aibaodan.cn/163foctfxbn.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163zkipmtqt.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163blaykyiq.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163ftkaogbr.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163gxyzbuym.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163xqvahrvs.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163meaogmpr.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163iritsdhl.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163wxzdlllo.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163hrtdzjaf.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163vfpvwonm.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163mkhgtfah.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163okhfplzn.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163zbtongrd.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163pjhdzbfb.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163acgzqtyq.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163fnhjlvbm.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163gpegjgzx.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163ecltvqaf.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163ajlzdpuv.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163jcbfywqq.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163bchqswsz.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163erdkjotw.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ptbqnezp.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163mhrqlixq.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163qakybsno.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163oufphlxl.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163wjcebwbt.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163wydftuef.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163bgtmhalr.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163bqeezwur.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ytihgnlv.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ocfkeops.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163wjvhyfrm.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163fnbbmvmr.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163ulsgkbvz.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163zumdzgng.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163qyowpihx.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163elsxbosb.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163wmxxhhhc.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ulfxmugd.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163uuwwgrxx.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163bfubbsfd.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163syibzadr.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163bsdqnpgt.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163uyyfhnvx.html

[F06] 删除文件
来源：http://www.xuanzx.com/163brmchjfs.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163tgsmkvux.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163vydyhsgt.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163zbqrakkl.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163jqscgxgl.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163qqbyqqca.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163wzuvudgu.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163prjqtjyj.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163kdzbspgk.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163pgldjxsl.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163fkvptyqh.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163hnkmnrka.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163vjjyjzaj.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163kknmpexa.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163fgeohmcr.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163cdygmnxq.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163gbzyebwo.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163bpwytwjz.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163rxbgbcwj.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163agqvkekd.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163xflcmfyb.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163qqrrkafi.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163xzvslbyj.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163keabubuj.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163cusxwmux.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163ahyxcocc.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163eezwymvg.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163piwsvtai.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163lpzagarx.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163owbufnsg.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163oykqufzx.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163xabuskbb.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163luyyhnuv.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163crsvwyor.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163kfelogjk.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163zwvzgzgj.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163tqmcalhm.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163savnpwqy.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163mfeewqwz.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163jazfeqwv.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163rjpjyenf.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163sxeqpbny.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163mwwnmuch.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ibyiccma.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163iwkucoay.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163ylqazfvj.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163eaqtdzln.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163xrdpcdbs.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163pxwfzoub.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163iscktqej.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163hmzqykze.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163cdfmsrpp.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163sgmgdshg.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163geqfymcz.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163slrrdnem.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163ntbnnekn.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163kbmscyrq.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163qpwgfslf.html

TS:   // 同上
来源：http://www.xuanzx.com/163ckyzlslx.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163dufpubsn.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163zxmcxrrn.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163ulrypzuy.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163idsjonlu.html

================================================================================
来源：http://www.sxryk.cn/163boygzyzt.html

G. 面向对象
来源：http://www.xuanzx.com/163qmkmzsvx.html

================================================================================
来源：http://www.xuanzx.com/163gkhzimzi.html

[G01] 定义类
来源：http://www.sxryk.cn/163mezujgna.html

Py:   class User: pass
来源：http://www.sxryk.cn/163wpnamlcj.html

PHP:  class User {}
来源：http://www.sxryk.cn/163bsarveft.html

JS:   class User {}
来源：http://www.aibaodan.cn/163cuwqahxs.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163bjccvpdl.html

Java: class User {}
来源：http://www.aibaodan.cn/163ofrrwnqz.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163jtgfnopn.html

Ruby: class User; end
来源：http://www.xuanzx.com/163qmgwdjuh.html

C#:   class User {}
来源：http://www.sxryk.cn/163ioramkrh.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163ngasrkbw.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163nvrkwebu.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163rtnryzig.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163qbgvnefm.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163copcqoao.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163hfslptgm.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163hrzxfken.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163cotowvpu.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163qiupzglz.html

[G03] 实例属性
来源：http://www.xuanzx.com/163fnwuuylu.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163tdhdpeak.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163jxcgiyer.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163eapwsgvu.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163ubgmeqhc.html

Java: private String name;
来源：http://www.xuanzx.com/163bmuuvubr.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163aidamzmi.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163xvkmgwtv.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163efxwzvpl.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163gqxkdrsw.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163nffvkoze.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163ezmuvacn.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163cijbtfgz.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163sgjfmnkp.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163rwuwqelk.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163vitsviee.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163afwmnxkb.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163jyrytaae.html

[G05] 继承
来源：http://www.xuanzx.com/163mhlcongz.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163bycqwhvh.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163vnpnovpj.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163fpuhkmsl.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163euijoehw.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163pytvriez.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163eoqemgfq.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163tuapbwco.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163pwsrgaqi.html

[G06] 重写方法
来源：http://www.xuanzx.com/163jteacpub.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163itkpaauw.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163udvknshp.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163btmgxptw.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ipzuqtxx.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163ppjzgcyj.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163vjtprzyh.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163hulanfnc.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163ycuyiujt.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163ljjqfthm.html

Py:   super().greet()
来源：http://www.xuanzx.com/163piyqsmke.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163jpjwvlht.html

JS:   super.greet();
来源：http://www.sxryk.cn/163tcgvuyhk.html

TS:   super.greet();
来源：http://www.sxryk.cn/163vfgfprtw.html

Java: super.greet();
来源：http://www.aibaodan.cn/163mjysaktp.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163regcvyli.html

Ruby: super
来源：http://www.xuanzx.com/163eykzqtxx.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163itfyfvut.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163hctyddmr.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163pvcpecba.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163cuaqteet.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163brhrjmdd.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163wflzivwd.html

Java: static void f() {}
来源：http://www.sxryk.cn/163usqvswim.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163pntqmenk.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163tsydwfyr.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163bcptdaia.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163ukmonpkt.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163zlszqema.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163tfcskxsn.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163qtrallct.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163rctunafk.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163bwuihlah.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163vqbhiauc.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163spcdgzrw.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163rgayrkwv.html


<!-- 参考信息 -->