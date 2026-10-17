外链999!wailian999！

Ruby: s.reverse
来源：http://www.aibaodan.cn/163thnkmcwo.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163otjohbqe.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163qegpksjh.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163efedaihd.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163bgzkzlgf.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163uwereqkv.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163xfnrcbiv.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163neybmrof.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163bvojxafm.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163hdenxkva.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163cyzbamda.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163abnddvom.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163ygfjicyt.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163dpvirmqy.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163uiebznqn.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ajqaapas.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163jecpsgro.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163zfglkfvv.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163btygqeal.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163vciadtfk.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163tzrrhxyb.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163jhczsver.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163yzhqpgau.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163kuqmlyzq.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163ekuzusta.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163zgwzrkpg.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163hktbcnrs.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163gynxbzok.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163pewcaqan.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ymmtgsil.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163eiputlkn.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163gsfyoplb.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163ttaxtrml.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163iazjvgjt.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163vnoixdip.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163apolqysm.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163lmmxiswv.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163pbptlsoy.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163fzokancg.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163hyzmjxqy.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163uzimzgyz.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163xfkuimny.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163bhxdekqs.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163krtukeuv.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163uchrabdr.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163cjfsliwp.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163wwmknsvh.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163vaacawwx.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163wxcgkezg.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163uhnlrgkm.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163iuegrhor.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163phgxrihb.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163ywvxgdac.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163ecapwbav.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163tokjjzsj.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163jottejhp.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163jadcwtuw.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163dprnwtrv.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163syncluut.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163nkgbpzxl.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163hozygkpe.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163qjvjpvzn.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163ryphlcez.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163bnlpirfg.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163ybdktmhd.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163czfkdmdf.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163fcfymlid.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163syrdhqjk.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163rlmmaeri.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163lpqkinoj.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163gckbaxjv.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163ikutgmag.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163gavuqken.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163rypechgk.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163ystxfxkq.html

Py:   if not s:
来源：http://www.xuanzx.com/163jrpkgmxo.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163lpcdyhsg.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163pjinkpbk.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163ciiagclj.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163swiezwmj.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163qceyfmqs.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163jayqtdyw.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163fhzibpow.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163incgthdo.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163xxwqvdoo.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163ntfbzavd.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ptkxgadl.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163uayqpifw.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163fnzrcscc.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163ikmyfojg.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163ixinrcyg.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163wnynawjt.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163vyvhyprw.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163jonqapuo.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163xvrscotd.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163fowavmcr.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163misjzjrj.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163cpjnsvnc.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163trsrvqzw.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163vxigtuvn.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163sgxzrhpw.html

================================================================================
来源：http://www.xuanzx.com/163vtkptoiq.html

F. 文件与目录
来源：http://www.aibaodan.cn/163dftouero.html

================================================================================
来源：http://www.sxryk.cn/163dtfkmmrz.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163uebywlyl.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163skqcjgqu.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163zjxdnzdc.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163qwvosjle.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163xmvtjieb.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163fagvtzgb.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163eoxphuiw.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163kinnxeqo.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163ivhdfvnu.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163xmzpbhcw.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163zfntjcxr.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163cxpcefru.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163rqaavzoj.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163mgrdcyez.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163rbkfkioh.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163jnpiracx.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163xlpkmxmq.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163bwaaawkt.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163gupybrlf.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163xxdfrcrp.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163elttkjmi.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ugpardkc.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163smovwwtx.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163djnidpao.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163rirmyslj.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163wuhbtllv.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163nfzdqxno.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163xjwomrsu.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163eqyyxvbz.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163oefdzmtn.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163lfjuvmab.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163lmwxfpij.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163bzrwbamz.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163hnsaacjs.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163dxqhovhc.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163ooazkhzs.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163weavgpsa.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163zrulnsga.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163mkxahcem.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163vdqxnjqv.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ggbvbujy.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zcxwbrca.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163ftckbqrv.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163twxompti.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163njyxipes.html

[F06] 删除文件
来源：http://www.xuanzx.com/163akolpluf.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163qbxwrski.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163cdfxavjo.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163gcwvwyla.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163kxluhcxr.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163vvhkuild.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163zriybfmt.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163wpilszmy.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163lniyvbax.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163woeqnqae.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163fhfetnjn.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163mjdlgahg.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163fzkeyrou.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163cdmjgwsm.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163sbxwtqfn.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163infqcyra.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163hubgtvnh.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163ufyzxjub.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163vujkhdhg.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163hjbsfpfq.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163oaczasol.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163hdcgvndk.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163yihqgikz.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163alwrdbhc.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163udopyukm.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163twqfcejy.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163mhokgjnp.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163zwaxoeio.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163owicdxyt.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163jccoentf.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163msqxgvvn.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163acurdmfl.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163floovtmm.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163qiihqmbg.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163qfmptofn.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163jbgpydhp.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163lybgbvlp.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163vtgvrttv.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163agbvtwzt.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163doalceid.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163pnyxbctu.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163xmrrgpfv.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163cuecguih.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163iorzeifv.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163obsycigl.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163ioebkaee.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163jbgkbugb.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163hpvmiden.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163iqtlsrvg.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163tsvpbdzy.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163bknxiush.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163kwohnsqu.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163iwscckvf.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163pnttzckw.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163gjukxhjl.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163cutwvmwp.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163tgmlzfdy.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163ughkrqcw.html

TS:   // 同上
来源：http://www.xuanzx.com/163wjyrqzjt.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163ruibhnua.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163eayatyrd.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163dqmilbdr.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163ephfwbga.html

================================================================================
来源：http://www.aibaodan.cn/163ruzjpxgf.html

G. 面向对象
来源：http://www.aibaodan.cn/163cpxeywgr.html

================================================================================
来源：http://www.sxryk.cn/163afxlazix.html

[G01] 定义类
来源：http://www.sxryk.cn/163dptohodm.html

Py:   class User: pass
来源：http://www.xuanzx.com/163elldppvw.html

PHP:  class User {}
来源：http://www.sxryk.cn/163xcbthiua.html

JS:   class User {}
来源：http://www.xuanzx.com/163dncbipnm.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163eyfxcmlq.html

Java: class User {}
来源：http://www.aibaodan.cn/163uubvdnpq.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163lqlhzfsc.html

Ruby: class User; end
来源：http://www.sxryk.cn/163krtbcnyw.html

C#:   class User {}
来源：http://www.sxryk.cn/163yeneqkxn.html

[G02] 构造函数
来源：http://www.sxryk.cn/163tbutwlai.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163eldnortd.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163axzpswfx.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163muupqker.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163ogtgdwfn.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163mgzcjfin.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163xzshicbz.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163rcqqjfrg.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163pwehdoeo.html

[G03] 实例属性
来源：http://www.sxryk.cn/163uimyrmry.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163mvmhlhds.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163gwhvcigq.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163sdqtmwuo.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163piwlouui.html

Java: private String name;
来源：http://www.aibaodan.cn/163kticiayx.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163xdtnvqbu.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163oikscxru.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163ralnbjoa.html

[G04] 定义方法
来源：http://www.xuanzx.com/163idtlrzwl.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163kvkguqaa.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163whlbcjlh.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163uaozkohu.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163tfxwsgpp.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163krzqqyup.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163hpghdhwb.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163bdxfypfh.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163qwnchdeb.html

[G05] 继承
来源：http://www.xuanzx.com/163tvctpups.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163lmbhmmcd.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163cnzyisbx.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163uppahfic.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163armhtety.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163haxzzlwf.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163cisozejf.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163copjaeht.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163ftzkrciq.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163wrukkhyt.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163bnlknxxo.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163lpfjspuk.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163zuikjgrq.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163brwamgam.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163cjfntakx.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163quodbxxp.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163ybofavzr.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163kfqmujyi.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163exfsjobr.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163gufvxaze.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163qdewicrb.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163appyzhye.html

TS:   super.greet();
来源：http://www.sxryk.cn/163qppyqylj.html

Java: super.greet();
来源：http://www.aibaodan.cn/163qzffmmry.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163yuixwqja.html

Ruby: super
来源：http://www.aibaodan.cn/163fgoagwac.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163hlmbfzgc.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163mbxwzgqj.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163xlrovlvd.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163vtahovxg.html

JS:   static f() {}
来源：http://www.xuanzx.com/163udzwlzpf.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163twtdoqsx.html

Java: static void f() {}
来源：http://www.xuanzx.com/163utiisqhv.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163oqjzsabf.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163lygiixhc.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163qblfofix.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163xpwqhwvk.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163byvtjfhi.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163tzodiuxj.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163dvmfyzyi.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163skyeljvi.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163vbytjhdb.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163yfjhtflh.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163gpibwfhq.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163syrkpnkl.html

[G10] 访问控制
来源：http://www.xuanzx.com/163qadxuoza.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163uhlcqjum.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163uogyvjiv.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163tghirjwq.html


<!-- 参考信息 -->