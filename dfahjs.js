外链999!wailian999！

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163vijjhrla.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163erbzjfvo.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163bwinbznv.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163ohudszet.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163wuqsavqx.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163zfyckddk.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163bswsvozs.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163kdgvgptu.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163ynqaxjgf.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163riutbiok.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163kcwjibzj.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163ccwncame.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163lyodvhcm.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163mtorbwjg.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163wngrpahq.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163tjldufwo.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163smxdwfsx.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163srvvabit.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163qwjqrgts.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163pcvolplr.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163asdrszjx.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163taubgcnu.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163mnwulpnp.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163zkejcbze.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ymlucwxe.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163fgyifgkf.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163rbgvlmcu.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163uvwsydhd.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163ismrwbou.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163cpdlknml.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163uadaysrr.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163bbshnzuw.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163tpmqxcdg.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163qprcozcu.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163oakzdkjg.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163nubbqazv.html

Ruby: s.lines
来源：http://www.sxryk.cn/163okkxogfc.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163ckvfhnea.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163jyuhyfso.html

Py:   if not s:
来源：http://www.xuanzx.com/163gwqtzoed.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163zlmjtzvd.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163yfnneknm.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163ubhptotn.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163mmctqywp.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163zlalqggj.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163xtgetlrn.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163ratxlenq.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163pryejgsw.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163wvxctnrc.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163mgithtlf.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163xtgzdmyh.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163talywsoi.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163lnqxcygs.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163nxbrjqvh.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163creatnnw.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163zybuyfxn.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163ihyfaqrt.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163oyanilen.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163sdnqxnxf.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163nwhrepvc.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163mlluuxnx.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163tuxuegaq.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163tehecggn.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163qgbgfryz.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163zuoeawdy.html

================================================================================
来源：http://www.sxryk.cn/163zjbsdlho.html

F. 文件与目录
来源：http://www.sxryk.cn/163qktikhnc.html

================================================================================
来源：http://www.sxryk.cn/163owmheppe.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163jjbuxnch.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163iuzjenst.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163pjmughae.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163cgkpgrdd.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163tjvvjqiu.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163obqciwfl.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163wsdnbeby.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163kgpkftmm.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163cpdrusvu.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163kbqsygzs.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163ebhscwch.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163rqpdcbiq.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163gxttmkuc.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163zgisyxbn.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163udvucvmt.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163dlmollqh.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163dyrkethr.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163gbarlpxk.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163ezwkpwxi.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163dgiqmlll.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163qhlayqbz.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163djhakghz.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163qohdhvpj.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163psfatuhj.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163ltkfvpan.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163pvpixwxb.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163qvrwdmli.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163oroadkwa.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163hvqjsfyn.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163xorciear.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163kbjmoqob.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163btusfhxs.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163aibjoabz.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163xeueaprx.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163neqgqkpl.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163sfsaxvgy.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163dgozcuqg.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163eyfxfsjd.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163zfbcesam.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163rszxjgfz.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163deaqzskq.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jxkziouy.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163gmwahddv.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163kkogaksu.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163nxqdbvmp.html

[F06] 删除文件
来源：http://www.xuanzx.com/163wviiuzqi.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163cymxzmol.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163xrseukin.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ixhubjfm.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163wjtnihyc.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163vpggkvcg.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163epxsgtty.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163xhcfiezl.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163ijepccpz.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163pdhwjkfd.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163xiuqpczy.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163vstnhrue.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163avpxtrck.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163lfteqpay.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163nuhscqic.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163nlxxbwgb.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163lebiokir.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163nzqlbazk.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163vcslmrmo.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163rorkdxns.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163fvavjvof.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163qlcynkaq.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163apmuobbo.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163mvxdvljn.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163sknnntnf.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163qklxbqzk.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163lbqajrgc.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163cetjakat.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163prfrznph.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163qveapost.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163hpbfaqmu.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163jpcyvnmc.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ycwmghud.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163nsrzumor.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163rodbrccn.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163zcsbbfgc.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163hlrrcwki.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163rsblzpuv.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163lnmifvhe.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163rrdmtagb.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163xoiuchrs.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163yltyddek.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163mlomalib.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ztodftnd.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163rbzgodsh.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163ycokijsg.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ndfcgyqn.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163peevnzae.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163qqrsavml.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163jlabssxo.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163ynwjceiv.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163izqfgscr.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163fvbdfzex.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163nhhdnlcm.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163gbylshhp.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163zbhvbbkd.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163ibbduyjm.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163nusfyavi.html

TS:   // 同上
来源：http://www.xuanzx.com/163ceqnjtji.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163atodlibg.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163fuhzvbmt.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163slkolmhp.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163xgnyjatq.html

================================================================================
来源：http://www.aibaodan.cn/163ygfgnajw.html

G. 面向对象
来源：http://www.xuanzx.com/163hsentvbx.html

================================================================================
来源：http://www.xuanzx.com/163uxjxanma.html

[G01] 定义类
来源：http://www.xuanzx.com/163dffloobi.html

Py:   class User: pass
来源：http://www.xuanzx.com/163klwsimkf.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163oojgiopv.html

JS:   class User {}
来源：http://www.aibaodan.cn/163uqefcozs.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163ennchewh.html

Java: class User {}
来源：http://www.sxryk.cn/163epbsokga.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163mscujxtr.html

Ruby: class User; end
来源：http://www.xuanzx.com/163amoogvvp.html

C#:   class User {}
来源：http://www.sxryk.cn/163ereixgfi.html

[G02] 构造函数
来源：http://www.xuanzx.com/163lbrzdnah.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163btiivpeu.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163acdplmpb.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163vnvvtcim.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163wegqpgom.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163yjvloqru.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163ybsnokwk.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163wyjtxnpf.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163yjvsctnm.html

[G03] 实例属性
来源：http://www.xuanzx.com/163wjwqqese.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163chomxmzn.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163ylplnjjg.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163qvndbbyd.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163upogsval.html

Java: private String name;
来源：http://www.sxryk.cn/163nulcsncr.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163iwtceoqe.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163nonmhxsa.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163vklizaof.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163lhcbffrd.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163vmyesxxj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163fppunipu.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163djzqrxsw.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163ndrpsztv.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163twlrtxwh.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163xwrtlqpu.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163beutfnzy.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163diqdjxpj.html

[G05] 继承
来源：http://www.aibaodan.cn/163mksdnpuu.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163zbnmuoya.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163lcqttwsl.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163eafhjuji.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ztfflqfi.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163xaikhwcu.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163bwhnzrle.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163tnvehfyl.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163rxojajyj.html

[G06] 重写方法
来源：http://www.xuanzx.com/163mjyaajlz.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163jtpvmqyy.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163bpgglpwi.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163hrabzeci.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163qwmfdqfm.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ubuollgo.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163pjpxzwgx.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163kwfglbzo.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163zilfmqej.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163dpqvajvz.html

Py:   super().greet()
来源：http://www.xuanzx.com/163krzyacte.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163hjmfweqf.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163rkqeacev.html

TS:   super.greet();
来源：http://www.xuanzx.com/163jgechtfa.html

Java: super.greet();
来源：http://www.sxryk.cn/163qwltngni.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163txvobzkw.html

Ruby: super
来源：http://www.xuanzx.com/163ipjcijsq.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163jvouidhd.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163capdemlj.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163wwlrxvql.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163smysdaqg.html

JS:   static f() {}
来源：http://www.sxryk.cn/163wbqsdacy.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163pbeetdak.html

Java: static void f() {}
来源：http://www.sxryk.cn/163sxyeketk.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163ghsrugpn.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163kxkhtygm.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163frkmofti.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163vfiipcpe.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163tlhdjdlf.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163qxuoltdo.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163dyveqioq.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163ihqrwcpe.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163gupxodss.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163kchxsfsx.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163lnuilsny.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163squtscsp.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163fjgpmzzf.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163zfmwckuv.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163vozydxzk.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163xlrxbmuy.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163hhzuyajj.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163iafphlyp.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163ysgnvvhb.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163ghbvokwj.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163gghvijmv.html

[G11] getter / setter
来源：http://www.xuanzx.com/163aaegmkrt.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163cfydbvlm.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163aowpxxhv.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163lpjlrvkk.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163rclibtuo.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163opmgjyjx.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163tbpdcxov.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163unscfebi.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163hyuwmcoh.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163zqwzsktw.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163wlpthyny.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163urnonzzo.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163hzziggye.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163mjyrkxtg.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163igsmrfsk.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163pxutltaa.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163zaxiruql.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163njuykyax.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163nzdzkdio.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163dfqyedgb.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163xpmthttr.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163ibmxmlhv.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163hgjfuugp.html

Java: u instanceof User
来源：http://www.sxryk.cn/163yrxkbyfw.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163jzadtuka.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163dvcwwygm.html

C#:   u is User
来源：http://www.xuanzx.com/163zsyyapsu.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163xxkarsnn.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163cxrbrvqd.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163chsdgtbv.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163tuhjwibj.html


<!-- 参考信息 -->