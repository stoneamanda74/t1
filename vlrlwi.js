外链999!wailian999！

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163jmkpebuv.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163gvqldiwm.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163jhprrkvc.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163jvcpaiqp.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163pjigtcta.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163mszteepk.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163tzxfjedc.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163vvngraff.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163gbnhmuxj.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163eekgudzk.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163tagwgorr.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163viptbzgk.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163xifxtwdw.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163dncagvhb.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163mbytnapk.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163vwqeiemc.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163utscjdfg.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163fzomotpq.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163wiyiozuw.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163tozjpijv.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163gjhzflff.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163ysqogzmn.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163vwrvbhyy.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163ugohjqut.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163vfnbvsiz.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163rpthsblo.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163htludrdh.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163iupqmnrq.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163lceagzft.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163nshnxoxb.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163rmfkyioy.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163njsxxpic.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163uosqlkav.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163kxnktshn.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163fnirajlq.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163drbuwtdl.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ykyuqzxw.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163mnjzwdfa.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163mmiapuxu.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163uselilco.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163awulzduz.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163vogggcnx.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163thvlpblo.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163uxznmgrz.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163yhmdsuwj.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163iejqsdts.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163prmpfmjp.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163pqeslxoa.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163blmqmisi.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163vmzpkusd.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163zmlpyrca.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163wearilwh.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163vecvegdo.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163aduisehd.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163kvjtzbis.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163qeawtsqo.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163bmuhnseg.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163hbizoisp.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163inyercia.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163hsqlhryl.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163zovmftge.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163rwwovuwi.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163xncumqcp.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163tgjfvodl.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163vnsjrcqv.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163nbdyxbuo.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163yiltnacw.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163eyohunur.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163wltkyswl.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163bnuomdot.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163vwwufhvx.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163anrirrbr.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163utofkgcb.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163oxrrxzyn.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163eocvxxly.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163suidmsnx.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163rxpmafpp.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163iewdrmph.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163cwugiztv.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163tlorbgdi.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163zvlnjggl.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ogdggeio.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163sitrazch.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163jofulogv.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163zsdndygr.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163tvedrfxz.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163avwjrkme.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163ytobxtua.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163eybeghup.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163zqjyxahn.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163eytgolaf.html

TS:   // 同上
来源：http://www.aibaodan.cn/163hmgnfpis.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163ybiysaav.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163rqxfcvkh.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163xdrhueuj.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163oblfmchi.html

================================================================================
来源：http://www.xuanzx.com/163hkgiplok.html

G. 面向对象
来源：http://www.xuanzx.com/163hbtfhutv.html

================================================================================
来源：http://www.sxryk.cn/163zclqnihj.html

[G01] 定义类
来源：http://www.xuanzx.com/163rlekyong.html

Py:   class User: pass
来源：http://www.sxryk.cn/163ebdggclu.html

PHP:  class User {}
来源：http://www.sxryk.cn/163nttqmugg.html

JS:   class User {}
来源：http://www.xuanzx.com/163lexotsbe.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163qumtascj.html

Java: class User {}
来源：http://www.xuanzx.com/163ehhmmzkm.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163rgihxmff.html

Ruby: class User; end
来源：http://www.xuanzx.com/163evwnptxx.html

C#:   class User {}
来源：http://www.aibaodan.cn/163otmhsylk.html

[G02] 构造函数
来源：http://www.xuanzx.com/163hoemnsdg.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163gniovmzl.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163wszgyjnw.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163tuimqccf.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163cpbrmsuk.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163mdjrttcv.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163drmsyiwz.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163rbhudpor.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163rjaeznrn.html

[G03] 实例属性
来源：http://www.sxryk.cn/163axyyqaef.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163lqiwoyip.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163ufijymzs.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163uoosczhw.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163umbijjwk.html

Java: private String name;
来源：http://www.sxryk.cn/163jcubaxyc.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163kjfcdomm.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163bgjqjeow.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163ludjbekt.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163xgedwrix.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163kzddpkdd.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163mzczltgl.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163aisecwzf.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163uvtrfkzo.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163onmtqefc.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163psebqjth.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163smalenyc.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163glwetrlr.html

[G05] 继承
来源：http://www.xuanzx.com/163ypimdmuw.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163ihsdgwuq.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163vieadsct.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163mwceicay.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163gqiljyjn.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163alxfvyup.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163pvgrlwmq.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163bixspixb.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163qeoezbbp.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163wlbhtwnh.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163tqvrkbyk.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163lgllkhqb.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163cclwzdpu.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163xofjxmsk.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163oqysxqiy.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163fyzboffd.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163effaqdfb.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163mlnbvvoo.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163lgtbyfqi.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163eszvfnru.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163pjdjpxxe.html

JS:   super.greet();
来源：http://www.xuanzx.com/163zrzkmtpq.html

TS:   super.greet();
来源：http://www.xuanzx.com/163qwstdwoa.html

Java: super.greet();
来源：http://www.sxryk.cn/163sjwhunln.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163uzesbnmf.html

Ruby: super
来源：http://www.sxryk.cn/163zvdwqbpx.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163ptnwnuwl.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163unzvybyt.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163tgmecnma.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163jvytbpia.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163zgsezlix.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163hmfnykgo.html

Java: static void f() {}
来源：http://www.xuanzx.com/163atveiyhe.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163gghjcqgu.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163fmnbrabk.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163ycqdcxxw.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163ssfsiava.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163krkjprnw.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163opypjapi.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163wutpecks.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163juwagjlz.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163rylgvbfz.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163kpsaurts.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163ocztuoiu.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163zsgsjpiu.html

[G10] 访问控制
来源：http://www.sxryk.cn/163xxtrbkov.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163tzvenvvb.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163btdgylna.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163frdcdjsp.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163elqchgck.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163qggzaiol.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163ddglmggl.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163yxsdxqmo.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163thgmevpu.html

[G11] getter / setter
来源：http://www.sxryk.cn/163tcyrifen.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163hehwkcsh.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163pjzgqdij.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163fqrntwap.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163ppwxcclm.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163teehwicu.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163avicgrzb.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163levzxoqe.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163lutnwgwr.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163qzaktexn.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163njjawett.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ntlzggmz.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163irpdkhfk.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163bwytaqmu.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163izhdqzvl.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163zqukvlnc.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163cmcnwtkq.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163qcrsawar.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163ejedpgrx.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163viiwyygh.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163opvyyeck.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163lachfiwk.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163hwkzumoy.html

Java: u instanceof User
来源：http://www.xuanzx.com/163neeykeny.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163pefvlvlu.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163oanalasg.html

C#:   u is User
来源：http://www.xuanzx.com/163mewcipjx.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163arzopzjj.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163sepqseer.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163tuubbwui.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163kemsamuf.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163fpxirogu.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163gjiztbap.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163vkblxoaq.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163cbhgmhnl.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163bgzvvnwm.html

[G15] 枚举
来源：http://www.sxryk.cn/163ygqcdwrc.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163fdejtkfz.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163gxrwsbcr.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163ecpnioea.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163csqmuapo.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163hukoxkcv.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163bfuxtwtt.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163vqafmxre.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163uorcpiao.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163cvxcrsvj.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163ssrkehoo.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163szafrodf.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163wqlyuzcm.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163tywrurtz.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163aanytxml.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163lzkdbsir.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163inbkkags.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163whxbzfxh.html

================================================================================
来源：http://www.xuanzx.com/163uteizufg.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163llgxlwvl.html

================================================================================
来源：http://www.sxryk.cn/163dhqvbrdm.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163xmenksto.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163pwdebpia.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163ucejxckv.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ucdbhpoe.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163otasvmhs.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163hxapejeu.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163uvdhkgbz.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163pyldgtsj.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163xtpgxems.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163fvrdutsf.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163xzkdpfxj.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ohqsaphu.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163wzuqigxw.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163wvnalntl.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163sceyagnq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163kwgwajid.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163cubnrlks.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163rqauwqrp.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163tcostegb.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163tbfhrwtn.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163avjddkos.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163kjnfjdqn.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163lmoypnuw.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163bsgplpii.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163itdlfziv.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163zwmppggp.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163vsnbddea.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163jzjgjauy.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163jlotcvop.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163tmrygoie.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163cochihbx.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ekgvogcj.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163oplqmuoe.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163tgioitsz.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163vwetkwku.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163ukmiclxu.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163ksjvqmgi.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163ubuvejrd.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163uqoejmds.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163zrynfbhn.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163unavwlet.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163zsvlbvuw.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163vabcgqqr.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163lracyebi.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163egmraxhj.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163yekaqput.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163fawywlel.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163unzbxrms.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163isjbmrnv.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163hjltmqxm.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163qpjisrnf.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163teueqzic.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163wxjlzrbf.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163biwknenp.html


<!-- 参考信息 -->