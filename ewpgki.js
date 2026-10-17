外链999!wailian999！

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163wlaozfes.html

================================================================================
来源：http://www.sxryk.cn/163hemdocnw.html

F. 文件与目录
来源：http://www.aibaodan.cn/163rkcmlhwa.html

================================================================================
来源：http://www.aibaodan.cn/163lcoysmuj.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163zkasduos.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163rjihbaji.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163hxhrdkcm.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163yxbugzvm.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163vbvhurlg.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163nzlwhzaw.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163zoybbxuo.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163mujyxcut.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163tskljxna.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163futewsug.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163qdasikvy.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163wpwdonna.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163zmirpcpg.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163dqphbece.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163iyhdstgh.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163odyzucys.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163rrdziqui.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163jonytiag.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163kzycrmsv.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163skgroyym.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163nvpioazk.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163qvckdyzf.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163tqfkusce.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163damdyqni.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163suepxung.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163aggukqpa.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163asigvbge.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163vduxyvvy.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163pouewvly.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163cxmjstnf.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163qaelddzx.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163kfpgsmwf.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163qbrdvyog.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163cdxembja.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163xeiktdev.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163hosbzvmd.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163irfmjsoj.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163hwxgwpdk.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163gkingcjo.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ptjhpowc.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163isgsxxxx.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163cutlpgrw.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163pmuurjrn.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163gjtbycuu.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163mjdjbdra.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163cdxqkoal.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163kpsnpsua.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163dcffksuz.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163zhlojaan.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163heimrdgw.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163hfcqfont.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163rgaptivr.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163mxmsskqi.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163cprecfdp.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163ctytlbcf.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163sdynwkoe.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163mnjngxet.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163abwttwsh.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163bqypvdfq.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163wtctojfh.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163efxtsmah.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163hqknksaz.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163bkioxpjr.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163lxbfnbkh.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163kluawozy.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163guxbzqac.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163kcisbmbx.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ecbkpudz.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163improuuh.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163jgiwfopb.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163drtbrjnd.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163bazkjtup.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163jnoydjul.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163axasvyli.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163sptdupbu.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163vnpisdsm.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163azmeldfu.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dizaywwk.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163hgtpjlsz.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163difmykqg.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163hcdyrhlv.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163ylhbhlpt.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ikqzhiwx.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163hmfxxvnb.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163dtakcspv.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163gymntjjp.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163eiiyehcj.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163fzwpjbjv.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163sjemxnhj.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163hjdscwrb.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163urxvadxi.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ryxrocvn.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163rvkvbstx.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163tlyeawsz.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163racqaumx.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163wvbrjgpf.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163yyrjkuty.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163hdimhdim.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163idkfmxuq.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163zarwxqor.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163gvpeoggz.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163rgtcakah.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163jzscrueh.html

TS:   // 同上
来源：http://www.xuanzx.com/163receuoft.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163rbxsipaz.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163wjdcbpfc.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163drahncwo.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163ekeebhpn.html

================================================================================
来源：http://www.aibaodan.cn/163xgrtxzis.html

G. 面向对象
来源：http://www.aibaodan.cn/163ipnhkhte.html

================================================================================
来源：http://www.xuanzx.com/163ibkngoct.html

[G01] 定义类
来源：http://www.aibaodan.cn/163qykauvlp.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163xgpvcdgm.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163wsppblni.html

JS:   class User {}
来源：http://www.sxryk.cn/163oidckpko.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163ewghjrwg.html

Java: class User {}
来源：http://www.sxryk.cn/163vctzhzae.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163auntxkqz.html

Ruby: class User; end
来源：http://www.sxryk.cn/163bkudzjmg.html

C#:   class User {}
来源：http://www.aibaodan.cn/163fzjjwdet.html

[G02] 构造函数
来源：http://www.sxryk.cn/163ecgkgsta.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163usjupbct.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163tnxhlyyh.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163qyzcjsvw.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163uidkglup.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163yjtitzum.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163borvhltu.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163qlqbodnl.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163iibzltos.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163zxaaqzbk.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163zjgjqkfd.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163fncwrghw.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163kdifdsuv.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163qcrwiuuu.html

Java: private String name;
来源：http://www.sxryk.cn/163cayqtsfj.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163symzawky.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163vsmroasa.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163mioykunq.html

[G04] 定义方法
来源：http://www.xuanzx.com/163stbfubfc.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163ccftlpwh.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163ahgkzunr.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163zwptbuuz.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163hyuvnfis.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163xytqxhko.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163pcdumkno.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163xkyazfzo.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163vguljibv.html

[G05] 继承
来源：http://www.sxryk.cn/163rxaioeld.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163usqlgkpv.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163wvqigugz.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163tmlycnfw.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163plcmbjtm.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163prgchsbs.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163bqzhmgqa.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163nacqquyz.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163ijgrzpui.html

[G06] 重写方法
来源：http://www.xuanzx.com/163uhcakbbi.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163jnxrfrdr.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163tmfrbgyf.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163imlrvvxu.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163onbjymbg.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163oxdbxltg.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163zbihbcfq.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163ddkvmmyj.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163tmmbbgug.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163rvjahtcd.html

Py:   super().greet()
来源：http://www.xuanzx.com/163xehmhrqj.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163mcyofqla.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163mxaxcrbk.html

TS:   super.greet();
来源：http://www.xuanzx.com/163xiwvngjr.html

Java: super.greet();
来源：http://www.aibaodan.cn/163nbthsvwv.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163yqkmerbc.html

Ruby: super
来源：http://www.aibaodan.cn/163ujguthxa.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163iijcmplg.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163lptiodkh.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163fqmeehjm.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163pbszmjes.html

JS:   static f() {}
来源：http://www.sxryk.cn/163yeqkdisi.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163dgowmzhl.html

Java: static void f() {}
来源：http://www.sxryk.cn/163mjmhugbg.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163hoqqqqdb.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163izaqwmom.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163cqezlgrt.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163cohghvpq.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163nexahyzw.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163rbpukboc.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163xhfqteyk.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163nlqowofa.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163eoyhpmvh.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163qsgyqqbv.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163tetrgkku.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163lkcptxkg.html

[G10] 访问控制
来源：http://www.sxryk.cn/163kergczod.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163hqeutxrj.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163xekodlgw.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163zvsgtzca.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163nrctqiin.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163pvviixbw.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163zrkyzpgy.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163mjqufgda.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163wfeeoyay.html

[G11] getter / setter
来源：http://www.sxryk.cn/163avljwmow.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163esqbyxgg.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163ayiumkbn.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163tsosejhl.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163mnestjcm.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163xnmqdqmw.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163bqjbkjwd.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163yhunjgie.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163ggetppph.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163awailgxv.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163mggmkjzp.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163bvxbwcxu.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163vxinapbt.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163hliwaoua.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163wiibytic.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163bdawpdkh.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163yskrpnrh.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163ttpfwqoe.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163pjamyqbv.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163ffbstwgf.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163wpfsnscm.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163xouasuex.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163evdtbtfs.html

Java: u instanceof User
来源：http://www.sxryk.cn/163wsitecmd.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163rtzbcsuq.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163cbuagheu.html

C#:   u is User
来源：http://www.aibaodan.cn/163wrwwqgcc.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163kewyqqlt.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163pqqessrd.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163cwperbyy.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163tsauuoii.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163wzdspglj.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163pnkbemzd.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163laxnqcmu.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163axvwwgwl.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163vbqbioyg.html

[G15] 枚举
来源：http://www.aibaodan.cn/163oszdwcsy.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163boqjfazy.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163xazxsisu.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163olufrxpx.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163lmhghcni.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163qbtcrchn.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163lqulcpzy.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163qzuggoxb.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163mxdgfkti.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163gxeyzlsh.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163fxqlovyn.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163tvnpetky.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163kqykotiq.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ywucnpju.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163rhssilyl.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163gmhcwmhp.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163wfyyjiou.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163vpibmsbj.html

================================================================================
来源：http://www.sxryk.cn/163vnmipjmt.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163tjvjmkit.html

================================================================================
来源：http://www.sxryk.cn/163gmrexbqz.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163baxxwqkl.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163kcagqurq.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163wnddzben.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163quhxlrfr.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163bxcldovt.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163pfixxdtr.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163qugqggut.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163ndxvktzu.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163bhckyrmu.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163tuqzlzua.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163xmstifzx.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163eycctrxu.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163kirycohv.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163xqhryopr.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163rsfjqgys.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163xksewifk.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163rtwdiltn.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163eknbbgww.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163hqolpael.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163qkipacvc.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163kroycpwy.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163xxljckag.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163uuqaawld.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163mpcudtlc.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163upcsqdgq.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163bxkrevju.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163akswfzcf.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163ouxivhua.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163xgvkqwlp.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163xineqvzp.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163pgbjfcjx.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ibtwafbh.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163czrvfkep.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163vansdrak.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163bgecwjvd.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163czjxkqqr.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163pqekgtww.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163ypvrywtx.html


<!-- 参考信息 -->