外链999!wailian999！

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163ydbgcexf.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163ujaekdvt.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163bmialwdd.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163pneeqpxa.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163tlalpayb.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163sbuvygqe.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163cqtbosgf.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163fugvqzvq.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163euwclvnl.html

================================================================================
来源：http://www.xuanzx.com/163qkuzjpnc.html

F. 文件与目录
来源：http://www.aibaodan.cn/163owcuqdqw.html

================================================================================
来源：http://www.sxryk.cn/163nqczaooi.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163risnvbmy.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163jvcilasl.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163sdjotfnh.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163joblagml.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163pjnbdbuz.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163pwuhifpt.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163lattsjgr.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163zmurvpea.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163jnijpuea.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163zqryotlb.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163rjcvdygm.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163rmkzhqil.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163jyvrsxnt.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163jamxokhf.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163skbxmrke.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163idotcxdt.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163hevuqlby.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163feutvkar.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163zfnptinv.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163spokqolh.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163jnfhsgvw.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163hghbuhfx.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163umwnbgyb.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163ukixfmps.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163qgepskeo.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163nyljkpzx.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163oaywxmfg.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163nmexwdjr.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163duuszwxu.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163fnwpftvp.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163lphdosux.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163hpqtiljp.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163pbhrqtts.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163ydikpgwi.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163aylxziro.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163xjguzgoc.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163ujytwjpy.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163hqxihbkt.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163hzpowkid.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163goiqwjfd.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163dswaghvf.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163wcwytmie.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163hdwcvgcy.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163qmywiqde.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163aepgnpni.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163dpjthuel.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163gafdlnai.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163ggnompfu.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163nlghrdlj.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163odfsaxwy.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163phlyduje.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163sbouvyag.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163dkangsyf.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163svyxpqas.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163svnwhokd.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163flnbajgc.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163batehczo.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163rlxuqbzt.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163csjsryya.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163djtucrgj.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163ktgnaxsn.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163fhyafkit.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163gggjiuli.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163whfyeokn.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163kuujniij.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163repeayek.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163nsaahvlq.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163tffwsxhf.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163izcfpyge.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163phjhkrps.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163dfeguhun.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163lhobxlzr.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163emeoligm.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163pmuhlepm.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163bylfregu.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163yuzgezcl.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163arbqxptz.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ffdltnkx.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163anosbszc.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163pujejarj.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163rfdueqwk.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163oixitnvc.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163vdsezxdw.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163tdvfbxjs.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163wdbfakwi.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163sjzbthpq.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163afcvlieb.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163sendsuyb.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163nlsjztip.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163tzioqgkw.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163uiuvvrlt.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ddkqqrxr.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163ecdmoacg.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ujlagqny.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163bgtgyjec.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163qkjgswqk.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163blojpqsm.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163tvpyjlrj.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163adbegegf.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163etfhxemi.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163striclqf.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163blejivqx.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163reniumur.html

TS:   // 同上
来源：http://www.xuanzx.com/163dsyasntf.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163pgnapnku.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163ogdgizhl.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163kimgzcmi.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163wuldlvwy.html

================================================================================
来源：http://www.xuanzx.com/163lvuusgjn.html

G. 面向对象
来源：http://www.sxryk.cn/163rsilziej.html

================================================================================
来源：http://www.aibaodan.cn/163vvfouqso.html

[G01] 定义类
来源：http://www.aibaodan.cn/163tircrgwd.html

Py:   class User: pass
来源：http://www.sxryk.cn/163zchirlvb.html

PHP:  class User {}
来源：http://www.xuanzx.com/163ztjneeap.html

JS:   class User {}
来源：http://www.aibaodan.cn/163tkqigwrl.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163ppvkwowr.html

Java: class User {}
来源：http://www.aibaodan.cn/163moeeosps.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163yswmvutl.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163praeqsil.html

C#:   class User {}
来源：http://www.sxryk.cn/163tlxyfjix.html

[G02] 构造函数
来源：http://www.sxryk.cn/163uzbiekyt.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163gcnxyezp.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163xgurdrog.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163lnjemgna.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163ndhhmquz.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163qdkyebxw.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163qtqwbgpk.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163mbvqkeeh.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163fvwjleue.html

[G03] 实例属性
来源：http://www.xuanzx.com/163pjdieytr.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163mwdoclil.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163ksoeghaa.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163wnlooidx.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163jylzptuu.html

Java: private String name;
来源：http://www.xuanzx.com/163bvzuomac.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163bbrbuehf.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163uyunikma.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163ecavsjjx.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163twlezbvl.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163dkfexcac.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163pbaijxul.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163ismlqnrp.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163tnyricou.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163juvvhwfg.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163jdluojbn.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163ulgkkkyj.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163zluuxfar.html

[G05] 继承
来源：http://www.xuanzx.com/163jbyzcuur.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163vsimbcvg.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163cvhdarsl.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163hqqgjqcm.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163oknlpdbp.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163twixpjnk.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163htabnhvz.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163ariaroul.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163pudqegzu.html

[G06] 重写方法
来源：http://www.xuanzx.com/163rcypeqdf.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163enepbovj.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163lselicxg.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163oejbmvmv.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163dcnhhwjs.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163iipoxlto.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163fuvxgfzr.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163joavbxlw.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163xsnpklvz.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163vosofyae.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163bszzyjjf.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163hupzfjqw.html

JS:   super.greet();
来源：http://www.sxryk.cn/163mchxctzk.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163ewurkhsh.html

Java: super.greet();
来源：http://www.xuanzx.com/163ixscdvwb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163yvswnlup.html

Ruby: super
来源：http://www.aibaodan.cn/163hxweqpum.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163aijqevck.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163xuztpnxb.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163pgzddiff.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163rvtelmrc.html

JS:   static f() {}
来源：http://www.xuanzx.com/163iylhtnsh.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163yekrccxw.html

Java: static void f() {}
来源：http://www.sxryk.cn/163uahesied.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163jiaeflly.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163zcgqkiwq.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163bpouxcko.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163cwkavufc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163sugvvjwn.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163cdimtoqt.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163bcvovsei.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163dsbtruim.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163dfiqsevm.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163grjgyaxl.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163anfhskmk.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163dttcwykn.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163skdidrcb.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163nzxwaijh.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163qsmowxbi.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163rjeuovux.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163xvjgdkes.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163txwyafzz.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163bzodxojg.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163vzbfaauh.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163ftwbyypg.html

[G11] getter / setter
来源：http://www.sxryk.cn/163vbpwryio.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163cnzbdygf.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163tnittpvt.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163vskcsckf.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163auzkiuys.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163vmigghzv.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163wcdfxumz.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163gyuvjmfw.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163wbbupdrk.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163qgdzejyn.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163oteciyho.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163wpbeupzg.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163aluvggge.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163nilvwyhs.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163wihnmgju.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163zgyhhkbo.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163anmbxmyu.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163iikumanj.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163ztvmygwj.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163oxsaemsf.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163semyldxf.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163gbycnqye.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163yrcfkzax.html

Java: u instanceof User
来源：http://www.sxryk.cn/163ulyntrfl.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163ccmuiaol.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163gtskjlgv.html

C#:   u is User
来源：http://www.aibaodan.cn/163hmxydqov.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163yzrtegip.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163bnunlygd.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163mjjqaxnb.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163fjrsqaaf.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163jfyejmqs.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163lkteotqq.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163qgzovtay.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163dougucjd.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163uguwyecn.html

[G15] 枚举
来源：http://www.xuanzx.com/163nrhdrmcj.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163xjbxfbpd.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163nkevnqyt.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163spqetnwf.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163slreihva.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163dhcksobn.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163vxhjibdn.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163mfxpxula.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163tjhkpuhp.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163etqcsogk.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163huqmptia.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163cupwmihg.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163jgtiahwt.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ywjifgyt.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163oyafsvwu.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163txkiqotm.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163bsosdqgv.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163octaddwg.html

================================================================================
来源：http://www.aibaodan.cn/163nemokhei.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163kmmdoquw.html

================================================================================
来源：http://www.aibaodan.cn/163utvotrny.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163ylhjkmax.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163xcmqvhtg.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163cdfyascy.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163hgquxwno.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163fztowirh.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163qjxjpsqu.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163dwcmpzmg.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163eodhdcra.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163uskxzbfg.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163hzrsxhhq.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163phaoleqc.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163vrrppacr.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163sesspowx.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163nongtxrk.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163uppcuqkc.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163rkcqutyo.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163lppqsqdo.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163wmxlqtjj.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163ttdjerje.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163rmjwiybo.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163kktijhrk.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163bkhwjjog.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163cfdsdoef.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163hnpgcojy.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163jbvxkjxq.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163yqpfskku.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163vxjinmdb.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163zbczsgbq.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163dkqjfmch.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163ewdhuyuo.html


<!-- 参考信息 -->