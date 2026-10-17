外链999!wailian999！

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163mvpngumc.html

================================================================================
来源：http://www.xuanzx.com/163tutlejxv.html

F. 文件与目录
来源：http://www.aibaodan.cn/163yjsanacu.html

================================================================================
来源：http://www.sxryk.cn/163sqnsixrb.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163wjmpecua.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163sftctgec.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163causcsgc.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163gukctvjv.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163kpcpnrui.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163qsqhxzho.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163pydxnbps.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163asblsfxx.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163orbxpamv.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163lewsryin.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163dusxftrz.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163qdanugjl.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163qlkzgptf.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163owfafjbu.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163wmpbawek.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163utmylvky.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163jdoltzez.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163tssbecvz.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163vkjdwlwf.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163yjyqrxgf.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163owseujlm.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163zviqcmhm.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163taftqmqi.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163qskidobj.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163wdynjiwu.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163cbgwneyy.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163zskaxmvy.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163blbevdva.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163zwwkfzka.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163ymmnypuf.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163tijcnryj.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163mrorxdhi.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163ahiebpfn.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163pojwfipr.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163quhrgsly.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163hcrvqlaq.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163flnmfrht.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163zjqfqhhv.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163yglfeewz.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163azuamqqq.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163vzsaoicx.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163clmuikzg.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163rrnxhgtx.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163vqzwgfof.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163uzqrfnhu.html

[F06] 删除文件
来源：http://www.sxryk.cn/163neoqinpz.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163npfmfdxu.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163gcnmwvvy.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163kmwuttji.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163bhtivvou.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163eeklelnu.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163vaemqcno.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163nyppycsi.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163uuidtjga.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163ejtfzxae.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163xwleiysb.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163dzusasjh.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163yeyietuj.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163pwottjie.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163jatyzrja.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163vfsesupq.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163annudrbf.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163feyioant.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163bqqpwceq.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163crlnmugo.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163cqlolyvp.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163qkqnhlha.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ozvgfeda.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163akgfzpms.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163kncjzuqd.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163vmguossb.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163wkotbjas.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163dosnkeom.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163ayuzqoub.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163uhpcwtoc.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163dylzrpqr.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163uhfmnloh.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163iafdonib.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163exvntzih.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163vnuyhcym.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163xngeophr.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163gdlevwca.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163gmlpixjd.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163edzaprjt.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163dwozcysi.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163tbkxqjqt.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163atlnqhtp.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163nqrcnips.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163jjjjrnxl.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163lrzuprkg.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163sotdozlv.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163gmltriyz.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163lkswnsma.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163pnaponaz.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163rtidhqbi.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163uqbdrlvl.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163trhmeukj.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ieynxtiu.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163bvwbemdl.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163xfiafron.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163fqjhnvzy.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163envvgabc.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163gaexnren.html

TS:   // 同上
来源：http://www.xuanzx.com/163ovlmizwe.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163bezwvxbi.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163bymgefdu.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163ndjktdfb.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163ynjhhuqi.html

================================================================================
来源：http://www.aibaodan.cn/163ynkjbqqr.html

G. 面向对象
来源：http://www.xuanzx.com/163neioowqe.html

================================================================================
来源：http://www.xuanzx.com/163bwzoxglg.html

[G01] 定义类
来源：http://www.sxryk.cn/163ccidsdmv.html

Py:   class User: pass
来源：http://www.sxryk.cn/163cishqnpf.html

PHP:  class User {}
来源：http://www.sxryk.cn/163nnrebcbe.html

JS:   class User {}
来源：http://www.xuanzx.com/163edfnuoxc.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163vgetmhho.html

Java: class User {}
来源：http://www.sxryk.cn/163xacrucea.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163wbdeliaj.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163rvplzfae.html

C#:   class User {}
来源：http://www.sxryk.cn/163fepnklqj.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163wiscawkp.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163mjjysyzd.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163yhwmbutj.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163njzondbv.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163xsipgrpa.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163odjyjgrj.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163wqdkxnja.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163fybjxxkb.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163gncylnmn.html

[G03] 实例属性
来源：http://www.xuanzx.com/163qihtsbsd.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163ydiqnphf.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163scituqoa.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163alkekkfi.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163fvajsxmk.html

Java: private String name;
来源：http://www.sxryk.cn/163ykjkzfzj.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163hwtomsrv.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163pryfydfu.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163sdyebair.html

[G04] 定义方法
来源：http://www.xuanzx.com/163hywaqmlp.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163lfcloegz.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163akzeditk.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163zlrhjbcz.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163qtkxlchn.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163xataccmj.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163ngmimrvx.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163fmfkayso.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163pgbweqfc.html

[G05] 继承
来源：http://www.sxryk.cn/163aoeywenb.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163nhxshknk.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163fuuyildb.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163baaepphy.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163csalvtyo.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163gzfvkcyb.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163bpfxraeh.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163jmvozeyq.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163fudzefyd.html

[G06] 重写方法
来源：http://www.sxryk.cn/163oiwxqypx.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163vzrnzkpk.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163plnkljlj.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ugiqkycq.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163uaihqigx.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163sicbkhfp.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163malbgmvj.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163ggwgczjs.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163zqffacmw.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163ckeqrtjp.html

Py:   super().greet()
来源：http://www.xuanzx.com/163cesqwuag.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163nsqasyol.html

JS:   super.greet();
来源：http://www.sxryk.cn/163octgguzt.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163ttlwhmoh.html

Java: super.greet();
来源：http://www.aibaodan.cn/163ubuhtocx.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163fxjuboeu.html

Ruby: super
来源：http://www.aibaodan.cn/163zfpomkke.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163hykvrlxd.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163sjzfvfgr.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163vycktdnm.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163hmmkacbb.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163fwojysyq.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163gfskxzeb.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163bnkcixrx.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163yaewpxue.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163jbwvmukq.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163oxthzndt.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163xqjubcgd.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163xwhrvnsq.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163oxmqvkqq.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163nfdlqzig.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163cpeqgozf.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163tquppydz.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163eoeqrxpu.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163qqshpxsg.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163ndejjcyu.html

[G10] 访问控制
来源：http://www.xuanzx.com/163diiqwdfa.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163snojmusq.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163fbjyoaut.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163uvskodgk.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163lfsgrvrw.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163fwiyfrky.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163yjyulzbt.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163gtgstigl.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163myvuwzmv.html

[G11] getter / setter
来源：http://www.xuanzx.com/163uqxntrtq.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163lxmpxibk.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163duqugnre.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163pncenfdu.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163xojunmag.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163pnuectgf.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163xqcqqeve.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163grquotlq.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163fnrfkypl.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163yiuxlydl.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163slkbsrpy.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163fwbxevvy.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163yinencvq.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163nznxxugw.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163iueywrxj.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163wdsmvqvv.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163jgfrcwrm.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163oggbrnxu.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163klmhaoej.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163egnodpim.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163whnsrkvl.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163jljtibmr.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163jtkvvqkt.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163nxjaxqnw.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163mobzgoqy.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163wxfdlqft.html

C#:   u is User
来源：http://www.sxryk.cn/163yckhgjqd.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163kymglhsk.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163gkkwdyib.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163hajtllma.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163bujwaeao.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163krbaocbi.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163qbynjidp.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163hifmixur.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163llvltbet.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163ddxqegpa.html

[G15] 枚举
来源：http://www.sxryk.cn/163hnlfwmyt.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163qbglarld.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163vgxuaaly.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163hbhrhzck.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163vyxjscao.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163cgviyitd.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163fzwzapcn.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163wieibrze.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163iincrqzr.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163wnatsldr.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163beofmqyn.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163iynxiwec.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163jisbogot.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163uezjohom.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163zhcfwrni.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163kfeeywkb.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163xjfrtklo.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163vozrbhgy.html

================================================================================
来源：http://www.sxryk.cn/163hpjvaizw.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163tyeeibdi.html

================================================================================
来源：http://www.sxryk.cn/163uslnxgvk.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163drprgauq.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163qqbwiies.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163bykiigaw.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ooabmfxd.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163tbjctipz.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163yrxuzgce.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163xbluuhte.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163czuzmhem.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163lvwcojhy.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163cusrghze.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163dbqhkcgv.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163tenkjhaz.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163lveqlxsl.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ksyelwev.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163zcuotune.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163jwpthhzm.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163uprpszkf.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163xbuwsgbw.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163czgaoong.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163bxbcpowu.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163nzzlzzkt.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163udhkkohr.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163efpblwac.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163copgyvkd.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163hjjvkktp.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163eniubzsq.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ryjbrsnx.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163gcqvwunr.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163mkeqgpiu.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163dexdvlbr.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163juyjnmqq.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163huyydhyy.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163jpjyfxdb.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163teedyukz.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163rkhiwpji.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163qotysofx.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163iseipaak.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163gyhahlea.html


<!-- 参考信息 -->