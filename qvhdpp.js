外链999!wailian999！

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163beasszcw.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163wxnlsejr.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163ozxhpznw.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163fahaosvp.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163cwnimvol.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163koykibvr.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163uqojjmbq.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163yuqubxki.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163riviaxzd.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163xvlvfaop.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163cxffirta.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163yibvrqhx.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163donhwapq.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163hnuxqnvn.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163dytgrzrm.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163pvyaowfg.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163gkfqgfqi.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163hjbkzyyn.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163edlpqsql.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163itsseluj.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163fwgdhuyk.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163tcktuxcl.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163fljiinlb.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163khgxsrcr.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163vcbajfyx.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163rigaebmy.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163fhmkajwx.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163nhvooqbg.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163jmqefssf.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163bvzmmhsb.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163tjemrtbz.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163vddobpkj.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163fsssyyze.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163sebnczlj.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163plrqkyqx.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163tvspfifp.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163kpwhkvhl.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163dzxpbwod.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163apilgldo.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163ldjgjukc.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163sbnvsbtk.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163ukjujnpq.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163tnvcfrdt.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163drsakchq.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163twrzuxtc.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163hgwlnomx.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163kdnpkxut.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163ulnsvmko.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163bonmjukj.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163ygsxihio.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163aqtxurvd.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163ipvcvklt.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163qsxorxcl.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163jqoafqta.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163ubfzirac.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163lzskdfow.html

Ruby: s.lines
来源：http://www.sxryk.cn/163mqphtsri.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163zludrasa.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163qqsbgajx.html

Py:   if not s:
来源：http://www.xuanzx.com/163vrbdgxhp.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163mamsszzr.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163hqdlkqls.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163jnoppxsi.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163sdxqmxwy.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163zxmwqbvs.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163vjizkxgz.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163eewufkbo.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163gddmlvmh.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163igyabhkf.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163ewkcuxtn.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163pcutnjqb.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163dnubvolk.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163mvhamkda.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163mekunoyr.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163rhkztmmx.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163etqpluxa.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163xhehhmgj.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163qggbivty.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163voqfdwtt.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163tgtostot.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163djtvdpqx.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163hzronhly.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163ynfzpqhd.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163vnuppyol.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163kgdroita.html

================================================================================
来源：http://www.xuanzx.com/163evdhzziz.html

F. 文件与目录
来源：http://www.xuanzx.com/163yzulpnem.html

================================================================================
来源：http://www.aibaodan.cn/163bqevovlt.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163epjozktp.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163kxkrmkqq.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163acebridl.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163llhjqlql.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163zpsnghnm.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xachkukj.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163ccujwqhs.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163bpwrbkrw.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163uplbqccq.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163hbiinvki.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163lxngxhut.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163mztbtxlg.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163xicyoozr.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163igvzdgan.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163gguudbnf.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163bdjwbxdw.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163zewszuiy.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163ksmnkywn.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163afgionza.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163erdsocum.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163mbqfobyu.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163tbachbdk.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163trqjfldw.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163spnrmkqv.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163lpgrutme.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163awfguqeu.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163hownqael.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163ccxusqpn.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163xggglzyz.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163cmlshinw.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163oneuxjhd.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163gjxwkxfb.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163bxhqibrz.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163okuddoxy.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163ralztehh.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163idwxvjmf.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163zovumhhm.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163wnjqmvqx.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163trlengqb.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163yxyfyttr.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163uggplyol.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163pwevhbro.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163fexwvmti.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163aunyvtnx.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163muqrxqpw.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163ndutqmmm.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163czbbljue.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163kdrsdkuc.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ajrlqwzc.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163jsxjzubb.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163pigtfvsm.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163btkuwnes.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163dtjqbovb.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163kpzmnivy.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163xhjkduys.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163hazztbvy.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163fsfcmahl.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163enrjeerw.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163egvvwcxd.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163giplhfpp.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163fkfuxuzx.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163zfyzpcjr.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163zmnqiyrw.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163cfvdguaf.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163tknyxoso.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163bpezeuzd.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163inydpqvc.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163pvdegxhr.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163cqpkhkik.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163owzglsme.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163lcdxrwgc.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163qdosdsvq.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163uvnjjmpq.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163hrksfipi.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163nanbasrm.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163szmnncvq.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163cdvagqmr.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163zyxdaeit.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163jbfzsgbe.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163mnkpsjya.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163akxtnlte.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163gbrmlnfz.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163gjavcqaf.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163ruojnsiz.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163drlrvzsa.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163aedjbtra.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163hbztlzlv.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163ecnfvgei.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163tcqijcwn.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163nguyptse.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163glvhlqlx.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163yczzazlt.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163gqoxejuf.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163sxntjbcj.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hmqfiebl.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163vazsjjyn.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163gkcjkjgu.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163xrewfill.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163fkuaoukg.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163jwwaahwp.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163xvcpirtr.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163clmqcjbx.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163nabsbrco.html

TS:   // 同上
来源：http://www.aibaodan.cn/163ymitkalq.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163lhmqoese.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163yohabhwc.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163pbciwoln.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163yipoiorr.html

================================================================================
来源：http://www.xuanzx.com/163yomfqssf.html

G. 面向对象
来源：http://www.aibaodan.cn/163oklzieqa.html

================================================================================
来源：http://www.aibaodan.cn/163zvaktnha.html

[G01] 定义类
来源：http://www.sxryk.cn/163zltdujxh.html

Py:   class User: pass
来源：http://www.xuanzx.com/163oxmsdscu.html

PHP:  class User {}
来源：http://www.sxryk.cn/163jkupxvka.html

JS:   class User {}
来源：http://www.aibaodan.cn/163jqgojieu.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163gktkwleq.html

Java: class User {}
来源：http://www.aibaodan.cn/163mmrhbhyc.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163keifbqdo.html

Ruby: class User; end
来源：http://www.sxryk.cn/163khjbgdoi.html

C#:   class User {}
来源：http://www.xuanzx.com/163lfrxbpel.html

[G02] 构造函数
来源：http://www.sxryk.cn/163siibpyha.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163dmjqinjw.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163xfywxoit.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163jcrvubma.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163ldmawxex.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163fxyeyman.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163tzzgurue.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163zmkzmval.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163txwkbtrr.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163ozwhgdfw.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163ahouqnin.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163mcrdycvz.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163vltsavie.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163furumjqx.html

Java: private String name;
来源：http://www.xuanzx.com/163wmeeydnx.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163mrfpuihm.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163lfwnbcpr.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163tmiicoec.html

[G04] 定义方法
来源：http://www.sxryk.cn/163pfmdjxoa.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163lmdqifnq.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163ogaoewsj.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163maugtjjc.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163nqcdbndu.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163ckxcvncv.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163ymukoffa.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163gpandqxk.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163qxregrfl.html

[G05] 继承
来源：http://www.aibaodan.cn/163asamhvcj.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163sjyuhzkl.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163xnjzpxka.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163goaybalh.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163vjnziovi.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163hxsmtdpn.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163xyggjbao.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163lsxfzqev.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163hshxnrna.html

[G06] 重写方法
来源：http://www.sxryk.cn/163lysudiuu.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163yrgtthdo.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163jxkwvbqj.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163eumoclrv.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163brsnrhty.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ffyqrtzj.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163ccnueuts.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163djvytrqm.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163dwnkvduw.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163lmgfoolm.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163dozevlaa.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163jfbbmbom.html

JS:   super.greet();
来源：http://www.xuanzx.com/163rbcajfkp.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163fyervxlj.html

Java: super.greet();
来源：http://www.sxryk.cn/163fvsmmtpo.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163stwedxoe.html

Ruby: super
来源：http://www.sxryk.cn/163fybyirrc.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163qkaseuym.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163drkssdvm.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163jjgwfxfd.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163iegcpofm.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163qzpmvwue.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163gdlorjiw.html

Java: static void f() {}
来源：http://www.sxryk.cn/163jpcagncw.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163lyttecrv.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163haidnfou.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163nfcttjgc.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163lcdgpufs.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163lricyuew.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163emarteqo.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163ztjafirh.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163gkykqycu.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163pvvnpkvr.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163ctpdceyg.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163naqhccvq.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163psfcjzdn.html

[G10] 访问控制
来源：http://www.xuanzx.com/163olopajfn.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163fcuxclwf.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163ugvtthux.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163xeyhewcm.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163rjwrawsv.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163uwkzitsj.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163gmaqausd.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163dyezlmow.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163sdrryypj.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163qdigusie.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163qejsxvmr.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163tfwistbr.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163abqwfuxm.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163jmvguzkg.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163kljsluqt.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163dmenzhic.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163dmwjkxma.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163sazgwukl.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163vbiaafch.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163ufnrerye.html


<!-- 参考信息 -->