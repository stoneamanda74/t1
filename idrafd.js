外链999!wailian999！

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163xuftlnwy.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163vcubckfy.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163nftifhud.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163zfxqywgi.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163tgugmygb.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163fotegvfz.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163jpaqspfm.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163megduzbe.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163ehilsiir.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163wmzbdhqe.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163clsfsbxc.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163vzzucltp.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ythphfuv.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163dtuckjoa.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163xahpdhjq.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163ksowmmza.html

Ruby: s.lines
来源：http://www.xuanzx.com/163foygwazv.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163djdtsogl.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163ttahxncn.html

Py:   if not s:
来源：http://www.aibaodan.cn/163wztgykwb.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163aggrgysr.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163wcdviynj.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163ppdzrohs.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163gbwmlrpc.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163nhzcuesn.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163ptfrlvos.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163mmvkezdr.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163uevvnnph.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163kwrfkskv.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163urpjrcxr.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163fdtafgtm.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163omonuhhd.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163lfjmrvul.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163xrnzdhpz.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163mbuykeni.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163qyringvf.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163iclklmxz.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163tqchlvtf.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163bbunwhok.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163cdjssqxp.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163otzdgqki.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163hmkchnzh.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163gnnvtwot.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163pgndejkk.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163zcqaqpuh.html

================================================================================
来源：http://www.sxryk.cn/163fxjytkfh.html

F. 文件与目录
来源：http://www.sxryk.cn/163dqopmzol.html

================================================================================
来源：http://www.xuanzx.com/163nvqfswvh.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163ldudzgdz.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163dkbynacd.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163lqaadlgt.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163rhhwiohc.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163ehveynef.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wgikifby.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163bakyuods.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163sgfrmfxk.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163yqvrqlbp.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163bpeeudjf.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163mzuqhhzu.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163aoofbjzf.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163lbipnbqs.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163zfmxgmgr.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163mmdaywzo.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163vmqofpbv.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163yuvxdbne.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163phqqppov.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163rihojwfc.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163yjnnfuez.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163lvmbekqj.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163dhhljmpw.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163oxgplmyx.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163bvmurgct.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163rsvduyup.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163oeozpbca.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163woqznpgt.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163ksqskhan.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163jeppgomu.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163djaemnln.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163hnzdcfjn.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ocucgujc.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163zlyaauas.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163umtccefe.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163tavoqzob.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163kujywlji.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163cyxmjikw.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163iduckada.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163aiycvmma.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163axenhvli.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163xokabpjt.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fpffkqbo.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163zacqegye.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163vkakwnnp.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163qtbqkoml.html

[F06] 删除文件
来源：http://www.sxryk.cn/163rfgvcjqr.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163oxjjgjgn.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163iobqncpq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163wlmxhrjy.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163wlnorpft.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163tohuneky.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163dtlmebsh.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163nomkpnfc.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163qgoocmju.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163besajomg.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163rveickbr.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163fddfksjw.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163tgepseuq.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163uyoavvkn.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163lygmbspm.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163jqbhogpa.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163apytigvt.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163stmkvhfo.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163xfuovuvr.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163ypxkmtse.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163tkwzcngl.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163rckbjlco.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163tvahmjej.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163jbasuwgn.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163gkpekgya.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163ugxvuonz.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163ooidrice.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163gmfeuosc.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163tefxiwla.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163vmffpbee.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163jkooulyo.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163jdrgoghb.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163towmhwyx.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163ptwjaccv.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163rtztctjt.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163favojxec.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163icvooejk.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163wqnwkzvw.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163qegthbcb.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163xeymbqnt.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163unxonbxr.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163hihqfimb.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163hawngsqs.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163npsjbyxh.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163pjrmdmlp.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163lwajsqps.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163jlwoihmg.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163uudhftjo.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163vryakoht.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163qljkjxjl.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163rzrvzcjl.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163hdepaqlz.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163rroqhxbd.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163senuxzgh.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163opcopmqy.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163wftkjszn.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163ixgtkglz.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163hfugmujg.html

TS:   // 同上
来源：http://www.sxryk.cn/163uwdmncwk.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163gbramkuj.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163opkmrqrj.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163nhzispwi.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163oglparvc.html

================================================================================
来源：http://www.sxryk.cn/163ernurlrk.html

G. 面向对象
来源：http://www.aibaodan.cn/163ximvpoxo.html

================================================================================
来源：http://www.aibaodan.cn/163sezofxdm.html

[G01] 定义类
来源：http://www.xuanzx.com/163gesofemv.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163yutqudti.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163ezhtwzwt.html

JS:   class User {}
来源：http://www.aibaodan.cn/163lwasnnce.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163bxvjmriz.html

Java: class User {}
来源：http://www.sxryk.cn/163himgajlz.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163sxfwpdfi.html

Ruby: class User; end
来源：http://www.xuanzx.com/163qgfbmvur.html

C#:   class User {}
来源：http://www.aibaodan.cn/163kesivdls.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163oxahqjru.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163mmqfouvh.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163rptznxcm.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163hwnvpcoj.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163sathohve.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163dxsyzhmz.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163cauvjbsf.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163wlqbrbmh.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163rwjzbfpo.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163fnrxzybp.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163fcnpuxee.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163dlfjpczv.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163ttwwbkyb.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163zsstlkuc.html

Java: private String name;
来源：http://www.sxryk.cn/163qvxsvdvl.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163ataapixy.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163fzlthcqj.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163xyjezbmn.html

[G04] 定义方法
来源：http://www.xuanzx.com/163qcrcwvlb.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163yeoslwef.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163viawtqjw.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163xjvfllyv.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163nnubzbjd.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163ddehtehe.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163jefbmwgv.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163epmyacxb.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163ehlnbywe.html

[G05] 继承
来源：http://www.aibaodan.cn/163bqcwquql.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163dkyfavhz.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163zrsqtchs.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163zjrbnrgz.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163oozcxjrn.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163tyapgkna.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163hkxowlna.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163jbwplahx.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163vwivmvmr.html

[G06] 重写方法
来源：http://www.xuanzx.com/163fwictecr.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163cleixkqu.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163itoqhzqj.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163mhkndctb.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163kqnpxvdj.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163vfofyncq.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163pthhvzrr.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163vewdhjib.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163bnpfsmij.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163awmwbcbh.html

Py:   super().greet()
来源：http://www.sxryk.cn/163hyuaqjys.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163rjbonisj.html

JS:   super.greet();
来源：http://www.xuanzx.com/163msqdyokl.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163acaskras.html

Java: super.greet();
来源：http://www.aibaodan.cn/163hplwyjyv.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163texusqot.html

Ruby: super
来源：http://www.xuanzx.com/163vgdramyl.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163htyenxow.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163mxxpkqig.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163phjnjhkk.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163romvutqb.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163bguctaai.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163hxttzytl.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163fvizmlcu.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163izgxrbym.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163suzklnih.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163iohbfgjc.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163wrigcfqk.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163yiiygqko.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163xxkbcchd.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163hpynkbys.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163vlpiumef.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163rpuhiuvq.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163ieyrbjqn.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163legfnpnz.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163qdhmtfry.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163xyqiwmda.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163mgpmgpnr.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163rnvnjgbh.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163rvlcohvw.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163bhxjxjum.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163aexidkpe.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163cfkflosy.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163rwgbhtbh.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163dbdtscem.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163yjyflkei.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163tsugfmat.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163mtjyavdy.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163lwrkqdch.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163xpwhrgds.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163taaccidy.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163hpymtqqb.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163jcbepnka.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163yhlzcgly.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163pjugyjpc.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163rfpomylu.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163twtnearn.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163xmysujqq.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163iomjyynt.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163ggcirbuy.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163oadvsnva.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163qquewoca.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163xplelwdc.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163esgqeype.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163ahsrhesh.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163cfxhmjdy.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163gjwmabtp.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163ftzruqkk.html

Java: u instanceof User
来源：http://www.xuanzx.com/163nxhwizon.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163jdingrna.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163hjlsqgvc.html

C#:   u is User
来源：http://www.xuanzx.com/163nxkgpdyq.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163fxnbdibe.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163vtsgzwmz.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163fbzqmcka.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163upxcrmvy.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163uyhmcmnj.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163rmrgcxry.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163unlqikea.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163nckvcgwe.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163yvgyqiqs.html

[G15] 枚举
来源：http://www.aibaodan.cn/163wnzzwqqa.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163rppirddv.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163kanxqihl.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163uqxmabdl.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163wyzbrqrx.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163ingwfmxv.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163svbkksll.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163bfyoxfxy.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ycomwhkt.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163bmsinitj.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163fxbcbwzh.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163nrcizczw.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ogjtvqyk.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163cpqzxnme.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163wytqjbow.html


<!-- 参考信息 -->