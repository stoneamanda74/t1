外链999!wailian999！

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163ckvbjovu.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163rdtkhnoo.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163vzgwminz.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163eqlqwtwo.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163cdiorzqi.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163rzkfcrxr.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163hqzwdkab.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163dkejaayv.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163hrmarxyl.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163xmshuylx.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163skuujwpx.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163pwvmaych.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163ifbhuzai.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163wyhhspza.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163wjmzrmnb.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163oahewrjq.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163rmenojpb.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163zpzbcdha.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163wdgpicah.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163yrqkwcda.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163nnfymfif.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163qxtqhchj.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163ribacfvp.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163srfsqwwr.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163fhroctkj.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163nytjzgjl.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163gwvrehef.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163zmcqkhcr.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163vqporeef.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163xkynpqis.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163udmgnegq.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163ywohohgd.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163iqjcgfar.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163mmxpkoaj.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163tvuemmru.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163yrgvlugj.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163jypvpbrs.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163twabqbxk.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163zmlavqmz.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163fftqxoee.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163holhhayv.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163kicezprq.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163jmksoykf.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163iwnefguc.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163bybtjhcu.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163acaqaqbr.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163urndzyqn.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ojlrhyqh.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163jfrukqkk.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163yvhlfuph.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163mgvdbowr.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163stxqmmic.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163ggtalygc.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163ajnmljhi.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163ejaosnry.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163tgwxgjhq.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163frbjbxeg.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163nskuvhsc.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163oycogahm.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163berhxqrl.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163mlrsnart.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163kfrwslgc.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163itwzwukd.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163aklponzh.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163jwhditlg.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163oyibahvo.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163elcasvgf.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163hmxobccu.html

Ruby: s.lines
来源：http://www.xuanzx.com/163puzhveih.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163ftsrsuxi.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163yzdmplnq.html

Py:   if not s:
来源：http://www.xuanzx.com/163rzpywezv.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163gvkwwxcc.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163znisjtek.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163fukxmzog.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163ctzaiacb.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163fchcbgfh.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163fhraqepz.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163hzhyxpjs.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163ancmfwkc.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163wjxynygb.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163ibkcuuou.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163jcryfdkl.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163vlbgjzfi.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163psxjdkyb.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163krhfeihn.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163kydqfwdc.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163szgyazaj.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163rmsldhvb.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163erzmtbcd.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163irzchmop.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163lpoqvdef.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163fuldtcnh.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163ihqoxbcy.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163mvypqikh.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163lttpgprn.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163jpkvrcff.html

================================================================================
来源：http://www.aibaodan.cn/163mxlgmhel.html

F. 文件与目录
来源：http://www.sxryk.cn/163pcgudmdh.html

================================================================================
来源：http://www.aibaodan.cn/163kavuzbts.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163mgxiabjg.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163trckwnof.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163wnvliqxk.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163aicmivtx.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163cpfvebtd.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163gtyaqzni.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163svagdtvv.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163iscvaftj.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163aegwnjep.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163grupkzwf.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163diusjkdj.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163cqupxouv.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163pzuyogmg.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163xiqqgeec.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163jbjikukv.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163skwhihhj.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163tyumvmvu.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163xxgxvucj.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163vwgwzxtl.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163aipofjjt.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163wqwvqvql.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163jxvmndse.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163xxdbiohb.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163xkqvxfoh.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163wowzalbl.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163npxqlphx.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163rcswjaew.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163siscuniy.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163wdraehsa.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163unuhsocn.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163hmknzayo.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163bxtwtwxw.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163ezdqiael.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163wgczjbmx.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163xibzdfhj.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163hbvhlpvm.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163xjecykev.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163ozwrecpl.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163upfavdfq.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163eeccbwef.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163fbfpteqd.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163jbkbmdzb.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163zoryjcnx.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163bdwcpnuk.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163pvwqlxvw.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163xybcjflb.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163yvtolkxm.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163uojwtiqr.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163yxgvcdon.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163syrxlimt.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163xntwille.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163uxhruvfz.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163oprczzgi.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163lvtebgfg.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163nynftoak.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163stmamuwk.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163ukwpdxsf.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163jpzcqihh.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163efvhgcnh.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163mccknoab.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163bkyeoxxc.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163ynvqvqim.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163ugmrsmhs.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163qqhyeynx.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163xhfzjghx.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163tvtgqakj.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ogzczzdd.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163uhzlxaic.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ipdokcno.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163wfodcofj.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163whjcqfkl.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163qlfmzfbh.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163fnjxvfei.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163zherbivz.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163dwkbunqp.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163mzelngru.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163caaaqjgn.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163apisjeql.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163ztzzwksw.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163busxnolj.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163igmkxwtn.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163pigrmrrk.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163yozmspei.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163flqlqbif.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163jjrbewil.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163jlewxfmp.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163tjudykqu.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163yjcibztl.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163goqorluz.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163rzerscgi.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163kdpevrpj.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163qwltuqyq.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163ymbsljlk.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ztpqxzpd.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163qmqpwuka.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163qktttypc.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163nfmkiqhp.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163afidbnsw.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163drkuatqc.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163nxkuoaca.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163qlaohwgw.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163ircjpqrr.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163vcemvznx.html

TS:   // 同上
来源：http://www.aibaodan.cn/163uzkodalk.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163fgrabmlg.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163jrjxrvtk.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163wpvuhtyq.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163ztcspicq.html

================================================================================
来源：http://www.xuanzx.com/163mxmniyqx.html

G. 面向对象
来源：http://www.aibaodan.cn/163jzljcjzl.html

================================================================================
来源：http://www.sxryk.cn/163licucuux.html

[G01] 定义类
来源：http://www.xuanzx.com/163ixjtkihv.html

Py:   class User: pass
来源：http://www.xuanzx.com/163gqhehedy.html

PHP:  class User {}
来源：http://www.sxryk.cn/163pcgsrgjt.html

JS:   class User {}
来源：http://www.aibaodan.cn/163izlbseyw.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163okxurqfm.html

Java: class User {}
来源：http://www.xuanzx.com/163bsneamib.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163vwbxeicp.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163mzcrbmtb.html

C#:   class User {}
来源：http://www.sxryk.cn/163ufxsvniv.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163sypejcbe.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163zogujiip.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163cnqcfdyz.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163uuknmmxu.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163itukpupv.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163ccwqwqif.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163duccqncy.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163wwyppgnl.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163mowmroje.html

[G03] 实例属性
来源：http://www.xuanzx.com/163xckedvjv.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163iwojuxbe.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163iocrttrq.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163iuvaxvyr.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163wfmxzsxp.html

Java: private String name;
来源：http://www.xuanzx.com/163nlnrsybw.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163rtpgyhdn.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163nahbkity.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163lketsncx.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163mjqklnya.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163yzhygkmg.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163atbdvrfu.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163okxdatop.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163epizwiji.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163jtooutym.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163hpqnuuxk.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163tqdinwxr.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163bousleiq.html

[G05] 继承
来源：http://www.sxryk.cn/163ckwjvuee.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163ewgpyjjw.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163ysnvxbwi.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ndaqcque.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163gahsafym.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163rnmlavhb.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163gsbxousu.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163kmziyemd.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163nweanycp.html

[G06] 重写方法
来源：http://www.sxryk.cn/163fzyxoxqr.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163rkkhdcyf.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163tqoknpiz.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163ldfojkqi.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163yumfvdnm.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163tzmuuxsn.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163icuperss.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163nbvyexyr.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163wowptjqd.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163fubbktft.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163abwjycoy.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163jdvkrfoj.html

JS:   super.greet();
来源：http://www.xuanzx.com/163vfkdnaom.html

TS:   super.greet();
来源：http://www.sxryk.cn/163sffghooi.html

Java: super.greet();
来源：http://www.xuanzx.com/163ziymongw.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163hobjxbpw.html

Ruby: super
来源：http://www.aibaodan.cn/163hibqavkz.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163rbupchip.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163hsrlzjgq.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163haaxplwu.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163myqppwwi.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163tgjxdraq.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163lgsvrejw.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163drxdsxmz.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163dsgonbfe.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163upbmnwhm.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163dzqnlpmv.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163gwxmatxr.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163kxoixogy.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163jkaupfec.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163kxzatktw.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163jealbmcg.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163vjobuuwl.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163obmtggaj.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163wfhxcnsu.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163gfgbkmmx.html

[G10] 访问控制
来源：http://www.sxryk.cn/163vyihxkms.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163fchqfvzy.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163ghuuuwbm.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163mvaqsjzl.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163nqwttxtj.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163xbsnlagg.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163aljijdyk.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163mmspxgkx.html


<!-- 参考信息 -->