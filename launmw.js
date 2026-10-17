外链999!wailian999！

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163tjiojkps.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163gjcjjota.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163ojjeucio.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163kbvhdkus.html

Ruby: s.lines
来源：http://www.xuanzx.com/163rxrhnrnq.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163pevwhqfg.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163bgjusnfx.html

Py:   if not s:
来源：http://www.sxryk.cn/163mmevsrug.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163aqpmwxnq.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163mvdfglpe.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163oiuzegvt.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163fxdovedx.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163utiwdjwd.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163tdrxrqhi.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163byizdmyb.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163sqaxrzbr.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163qpabwqrh.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163vkzruqoi.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163sxlpeoht.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163wqtrqnle.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163pklovvxf.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163evrjqcmg.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163bugzmsaq.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163hothfzkj.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163gemqjuqh.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163gvmfsqfa.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163hzysktgn.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163zdsjkqzl.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163gyjddgxx.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163bhpcmbem.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163lmmjdglx.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163lmmriazr.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163qszdvxee.html

================================================================================
来源：http://www.aibaodan.cn/163kvxwpgfx.html

F. 文件与目录
来源：http://www.xuanzx.com/163xqoadbuk.html

================================================================================
来源：http://www.aibaodan.cn/163vblgqrbz.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163ookwgnsh.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163ptearkap.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163txibpybw.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163yyocvrxw.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163hpqzskji.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163nzrzlsph.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163ghguotta.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163ggarktmt.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163utjllwdk.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163ceafaavv.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163wtrdnhcm.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163agfrqbdi.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163kmzoqdtv.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163rvttxzzx.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163oaubsfkz.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163iyxiuhnb.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163twvjdnnd.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163lpdrcqbw.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163nkqwmduu.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163vgdsanig.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163fsxknako.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163xgcbtyja.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163cfxfvcws.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163ajkybptu.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163bgpkwvcn.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163ooxbyxyj.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163oparcsal.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163tlatwdvk.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163ncnfelwq.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163tumppzmt.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ogmqiimk.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163wlncgiui.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163fbzlbyof.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163mzldtimp.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163hksrkxrd.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163uteftpcl.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163kmjdfevk.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163sfyzbfjs.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163tyejequd.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163zfnmkhoh.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163frdjhagj.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163awhsbwvq.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163zoffoabu.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163eapxhprn.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163ntpwttwl.html

[F06] 删除文件
来源：http://www.xuanzx.com/163rfpqvxtk.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163tsqvkaeo.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163txoaywsp.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163chwbvncp.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163phoyqbkf.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jpmwlohz.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163hftsxbjp.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163tuwtjkwq.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163xboecdev.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163hrsshrru.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163jbtiejod.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163mztsaksi.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163ehxizjoe.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163eubjwshy.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163wsvftklb.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163eetxmutb.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163oapzpjcn.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163ckhcnlbh.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163dwibnrlu.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163isawlrrd.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163vmoyoayt.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163zlecoyrh.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163wgcgeiwg.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163hbkqxwxg.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163gqkihcef.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163zhcyfknh.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163icqggtha.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163ieshmwmq.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163efujofpt.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163pbonaovh.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163kmajypsr.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163bkyugies.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163nwugumyz.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163yfeywwiy.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163xpsxbvkz.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163hoilobvn.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163aofjpklj.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163gikmfkne.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163qnyyyrym.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163gsuekadh.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163pdospzhi.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163okmaozbb.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163quxgcher.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163btnroobj.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163jjgorchu.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163pmmuiffo.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ufatjkpe.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163rxyqvldz.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163oojxzwrl.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163obtwkabs.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163gfdythks.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163vkyexkpu.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163otkgzcvf.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163exjtcgea.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163lckbvhga.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163ijkzadoe.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163rkmgyyfw.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163hjboytla.html

TS:   // 同上
来源：http://www.aibaodan.cn/163ztbpbtrp.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163sqqaqyfp.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163svtjbrxs.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163wiboswpj.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163iyascmdj.html

================================================================================
来源：http://www.xuanzx.com/163reseurdz.html

G. 面向对象
来源：http://www.aibaodan.cn/163zhsfkiva.html

================================================================================
来源：http://www.aibaodan.cn/163stbprzzi.html

[G01] 定义类
来源：http://www.sxryk.cn/163ijoqiaxl.html

Py:   class User: pass
来源：http://www.xuanzx.com/163vjmzwell.html

PHP:  class User {}
来源：http://www.xuanzx.com/163ekcnjtbw.html

JS:   class User {}
来源：http://www.aibaodan.cn/163zyexiqvh.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163chpxrqlk.html

Java: class User {}
来源：http://www.aibaodan.cn/163fszdlzvn.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163lxqcbilq.html

Ruby: class User; end
来源：http://www.sxryk.cn/163zmxhijpe.html

C#:   class User {}
来源：http://www.aibaodan.cn/163gcxgvcis.html

[G02] 构造函数
来源：http://www.xuanzx.com/163xnyximmw.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163zkficczz.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163yflykust.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163hidlobzy.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163fdlpnpcg.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163nlbdvmjp.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163idbkujsr.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163glvljffq.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163fsknklll.html

[G03] 实例属性
来源：http://www.sxryk.cn/163mgouodgn.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163cqberfsw.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163vsyqoujv.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163evoachls.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163duvsooxr.html

Java: private String name;
来源：http://www.xuanzx.com/163zhxbwxws.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163dwjpkhfg.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163cpzrutgf.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163ajmefzfe.html

[G04] 定义方法
来源：http://www.sxryk.cn/163pzkzneck.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163zbrrzbpz.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163skyrhmyg.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163qkydczgj.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163bomaxnep.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163sxmnajuc.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163npwrotoo.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163nixfcxlp.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163diytfeha.html

[G05] 继承
来源：http://www.xuanzx.com/163bslsgufo.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163rugjmdsg.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163yaqhzuly.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163tartesjm.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163trhgxnos.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163ggjnfwab.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163ujolacvi.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163enpqidjz.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163xypqmbcb.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163hynscrps.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163nbhbyrqy.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163fmoiyvuv.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163bsowyxdz.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163mbeerbeu.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163evharnxa.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163aqtzuane.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163jlufpuen.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163vufxnmqf.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163zhievrhs.html

Py:   super().greet()
来源：http://www.sxryk.cn/163btyyqhuy.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163swhubjkk.html

JS:   super.greet();
来源：http://www.xuanzx.com/163wqqmjxkr.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163wkmnrtls.html

Java: super.greet();
来源：http://www.xuanzx.com/163jfqpsdqf.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163dktjndob.html

Ruby: super
来源：http://www.xuanzx.com/163vksrkdgf.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163nzkrdqeo.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163ectidmbu.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163gjqpdxab.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163yyconojq.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163lubkqyao.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163glfivobp.html

Java: static void f() {}
来源：http://www.sxryk.cn/163oalgnoxx.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163gwheygbn.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163jkhyisvo.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163sucntfju.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163fiutmste.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163hdgfczyr.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163hrblizie.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163abnsghln.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163fdpdhafe.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163dxssljne.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163gcpwpesa.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163ynnitvkc.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163iqfnqhje.html

[G10] 访问控制
来源：http://www.xuanzx.com/163kcmisadk.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163cpldexps.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163fzuheunj.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163jsgghtly.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163mkoupxus.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163xsjeyqyp.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163zdanqlhf.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163ldwvxmcz.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163zrxgcpsp.html

[G11] getter / setter
来源：http://www.sxryk.cn/163borauzzt.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163ubsrtczu.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163xrvkqerd.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163hevtfmhi.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163lyfmlqar.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163ovchbmas.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163rkclqpde.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163ivsodpel.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163rtpndnui.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163uuqgyruz.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163iomutstp.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163nskwlfya.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163wpckrqdg.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163qjzsevqz.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163vvbdnzse.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163gvtfkacc.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163nxjnspwv.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163urjlywom.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163zfvipzwk.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163emofqnxc.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163xoxbwfkw.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163dxybjtgf.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163zqttfcqs.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163qfalkouh.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163sazmuluy.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163iemokctb.html

C#:   u is User
来源：http://www.sxryk.cn/163hrfeaoao.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163rnxsjbpt.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163nfkmoulz.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163wqvixwxj.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163yeucnlzk.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163nozadvth.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163cvwzejbd.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163lccqbhbf.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163lvidivsx.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163vyezpuug.html

[G15] 枚举
来源：http://www.xuanzx.com/163aclcdwqg.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163oxyragbq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163bmzeaign.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163kvpfxlzn.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ndlmefpl.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163dolcwxoy.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163lfogdhbu.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163wjboehlu.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163hgpywfsn.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163doyiavtg.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163axonmulx.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163qewsvllu.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163sobrtgni.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163qfblmdlg.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163uzdyozni.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163yugqgtgz.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163awqnbpus.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163cgtioxnb.html

================================================================================
来源：http://www.sxryk.cn/163vcbbkwik.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163nlteamwa.html

================================================================================
来源：http://www.sxryk.cn/163irlcwfbt.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163vtcrslqn.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163sbxgbrui.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163nyfasczv.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163dzfoihrm.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163gcgedady.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163etzjvlew.html


<!-- 参考信息 -->