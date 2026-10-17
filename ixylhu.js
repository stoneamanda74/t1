外链999!wailian999！

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163wfxxjgzx.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163xyiyihjh.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163woetosmd.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163vnphclzx.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163hzikfahe.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163yjbwnwkt.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163btxkxcul.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163symtdjnh.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163bvrasiwr.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163vhidciiu.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163kojcoley.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163wcciueic.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163hydzorqz.html

================================================================================
来源：http://www.aibaodan.cn/163pmqkcbvf.html

F. 文件与目录
来源：http://www.sxryk.cn/163hpnshqng.html

================================================================================
来源：http://www.aibaodan.cn/163qwnbozxr.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163tgjaeejw.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163qcthtvdq.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163wadvhloy.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163hiollfdm.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163szufcdtv.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163klqkwaik.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163fupgpqym.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163zqjhzkgl.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163mwhikojs.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163blgsqnfx.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163usghibmq.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163flbkwkgb.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163pujpconj.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163zclpeuqv.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163romfkrie.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163bpqlwnli.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163ookqawon.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163fugxouqp.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163blgpciwg.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163ossxgybz.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163vkxmrsbk.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163skhwyrqt.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ttfntged.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163mxmcwulo.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163dahivucf.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163nvljkiyl.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163ienmfena.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163pvlwheyt.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163bnrlrxic.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163qidpcorb.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163kdqhwgky.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163enncfqlb.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163jywllria.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163xdmxgwuu.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163kjkftdtf.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163hojeaknt.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163wunxlwbm.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163bgnmycvc.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163zxrjqsif.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163pawfdckb.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163jitiknyq.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163carvggih.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163skizhokq.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163jkckpihn.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163xlczskmz.html

[F06] 删除文件
来源：http://www.xuanzx.com/163ksizfwbz.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163zoebxsrx.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163xahpbvma.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ufeavhye.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163bwllzudz.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163imulrvrp.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163euwxrhpf.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163ypnsfuoy.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163tkfaylax.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163sfpjdytx.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163qzuekyxj.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163ocinvcey.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163zaqzqzmu.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163pohvshdm.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163fhrwgsrl.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163ghvpuwxv.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163exwykjjg.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163nuakvbxg.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163wdtlowty.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163nhpmrcmg.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163pptydepe.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ttbhqlbq.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163olnojiwe.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163kfmtridg.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163nthspylo.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163cqvxrumv.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163wzmdasno.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163tkqapakz.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163pctpqaom.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163yysiclts.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ygttztne.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163xenxhsyk.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163pxszglwh.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163zjhntjak.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163wnzjdayn.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163nplxveai.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163crkdqxri.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163htrbcobd.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163obmqgikt.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163tdvaczub.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163ukogbpjv.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163eirdwpoz.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163iusnpnlv.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163jcrgsdfc.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163cdvfmric.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163rsanmpnp.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163fxgcrulz.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163izkqzgkr.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163alujgywe.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163dhznjzeo.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163kzovhpwp.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163vgcceasz.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163pzjajfjy.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163vctzzjoc.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163nevisdla.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163geotygon.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163bjildeyl.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163nibvshqx.html

TS:   // 同上
来源：http://www.aibaodan.cn/163nuqxmbdk.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163mezxllpo.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163hqgaldlm.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163bxyxfhsl.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163vujgvatk.html

================================================================================
来源：http://www.xuanzx.com/163xhxsoekd.html

G. 面向对象
来源：http://www.xuanzx.com/163jfnosits.html

================================================================================
来源：http://www.sxryk.cn/163xewrtemx.html

[G01] 定义类
来源：http://www.aibaodan.cn/163tauzobia.html

Py:   class User: pass
来源：http://www.sxryk.cn/163objqaevc.html

PHP:  class User {}
来源：http://www.sxryk.cn/163upworfbp.html

JS:   class User {}
来源：http://www.aibaodan.cn/163sfialkwa.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163nozoguvr.html

Java: class User {}
来源：http://www.aibaodan.cn/163gfjyseec.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163pwdwnooh.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163ngalqlqb.html

C#:   class User {}
来源：http://www.sxryk.cn/163zfpnldfe.html

[G02] 构造函数
来源：http://www.sxryk.cn/163nkberymu.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163xxvqvrxp.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163fuwqwrqg.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163qcfonlfd.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163qppmbnkj.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163joisbrmp.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163jsmmoctn.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163xbcgfgqu.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163pzemigzh.html

[G03] 实例属性
来源：http://www.xuanzx.com/163ysnxdtqh.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163czypnpgy.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163ygczsgwb.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163kbpybclt.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163tnywvrue.html

Java: private String name;
来源：http://www.aibaodan.cn/163fssetvdy.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163gqqnpcvi.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163urkwzmzm.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163coskfxzc.html

[G04] 定义方法
来源：http://www.xuanzx.com/163drmlzhsz.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163mqnpqexf.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163obobxqtm.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163wfsbgshc.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163sggkwica.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163vqbzsxbz.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163whvarbkp.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163xofqolfl.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163cjnrarwd.html

[G05] 继承
来源：http://www.sxryk.cn/163ajthvybd.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163lxnbsmit.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163xehckgiv.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163pioiiqkh.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163bywjfxqx.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163xhkuuzuu.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163cuvxixim.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163dxubdhyo.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163lkibekbu.html

[G06] 重写方法
来源：http://www.sxryk.cn/163tycpvllj.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163zobwtako.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163aovgcbeb.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ouyyqyys.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163tuvcygys.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163bqxxcfnh.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163kcemnpns.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163xceryleo.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163zmqkwmaz.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163yyqovsil.html

Py:   super().greet()
来源：http://www.xuanzx.com/163nnnxrcje.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163soifxxwy.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163svozatef.html

TS:   super.greet();
来源：http://www.xuanzx.com/163jklisbul.html

Java: super.greet();
来源：http://www.aibaodan.cn/163tloohjzm.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163kbredzin.html

Ruby: super
来源：http://www.sxryk.cn/163ygfjkeyo.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163hmzcarcz.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163hlxybrak.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163hmzwysxb.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163nypsfazq.html

JS:   static f() {}
来源：http://www.xuanzx.com/163rdiocwrr.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163hnvoqwll.html

Java: static void f() {}
来源：http://www.sxryk.cn/163aiqstguc.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163awwjjnth.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163erhmshoi.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163odbknzma.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163phsxazoe.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163vaacovwa.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163mksoadea.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163otxhtueo.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163kbcewntd.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163lddeatuu.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163xsrlrjrd.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163xnvlqxua.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163fxpxfxpq.html

[G10] 访问控制
来源：http://www.sxryk.cn/163efuvagdg.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163ugudspwo.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163arefougg.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163iwymjods.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163ecrzijno.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163shropmsu.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163chozttvr.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163phtynfih.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163bnswcpaw.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163tptnolce.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163wxqccuje.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163afsyumpe.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163imyowhwy.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163rvxkayil.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163aqszsctf.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163fwjuksiw.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163dmxbiays.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163xiebhlxx.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163mzgdbwll.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163ivsixlwq.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163krlsatej.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163jerpasfl.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163mferxnuo.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163unyozwcn.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163tyaqlumx.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163yvivdfrc.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163bejzujmf.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163btsnscwg.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163mvrssejs.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163ofygoqtn.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163fpvsasuc.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163pmnfepsh.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163uyqmzbpp.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163lfcozncq.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163rtvbmcqg.html

C#:   u is User
来源：http://www.aibaodan.cn/163djbflmii.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163lqluhlrz.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163ysokdrkq.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163lotktfsd.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163akmqxqei.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163hwxhllkm.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163aclxxxtc.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163wmmgawck.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163hhflfmxm.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163subhiurq.html

[G15] 枚举
来源：http://www.sxryk.cn/163vjqseprz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163jljjolvd.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163efmzejln.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163dzmbblmu.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163wxjopnpb.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163mcdchjgs.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163xwtprrju.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163yyivbmrb.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163hftpnexc.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163dgiavidl.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163rrcnrati.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163ljdxyppr.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ousdbgou.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163eyqdzhhz.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163tgzbgvdj.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163kgeonksk.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163zkvfhxjw.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163hbspmpes.html

================================================================================
来源：http://www.xuanzx.com/163yrbclzaa.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163notaller.html

================================================================================
来源：http://www.xuanzx.com/163gerxphpu.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163mkyirouc.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163bbrzdxpw.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163wrdvyogx.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163tzuickml.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163kvdrsnma.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163gnufoayk.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163xjotahkh.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163fhxqqfux.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163ddkhbqla.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163wmaovcgp.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163mtlcodue.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163aksrqovo.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163sdshqkxz.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ctdmuupd.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163imcpwzwy.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163ogdgwuui.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163wugsfrdx.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163rtcmlqbt.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163fpnpdezy.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163wrvrwryo.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163nnawwtnn.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163qloadctn.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163axhyvrtj.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163hkjqrxlx.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163qjesdwpf.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163ajbghnch.html


<!-- 参考信息 -->