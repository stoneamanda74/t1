外链999!wailian999！

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ipellipc.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163bwpudqbf.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163hpzqfcrb.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163quomatdh.html

Ruby: s.lines
来源：http://www.sxryk.cn/163chxcgjci.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163kuaksbck.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163lureioud.html

Py:   if not s:
来源：http://www.aibaodan.cn/163nyisdanb.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163bofzirpo.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163mheijcia.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163laehbses.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163ntfruzzk.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163fcmiqcnq.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163kpwffodc.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163lnectjau.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163mxymdxke.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163vhrynydq.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163xrupmelw.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163gsdufqqm.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163zjmvbitp.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163anqbusdq.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163oefjttsx.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163xurcvnwy.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163kpghigiu.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163vjkejjul.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163nreynrkt.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163xokaajbm.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163exxxvyil.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163hpbefrak.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163tesbigdy.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163qarkbrke.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163mtdyjlxi.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163bvvzwdoi.html

================================================================================
来源：http://www.xuanzx.com/163rwjfgcqz.html

F. 文件与目录
来源：http://www.sxryk.cn/163xkcaoppz.html

================================================================================
来源：http://www.sxryk.cn/163ibgdcpql.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163kpgyfsoj.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163ulwmgyyw.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163jhqxgtlh.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163lkpktviq.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163sfielpcy.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163jeueugnq.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163tmacrpom.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163btmbblru.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163tggyfeya.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163kftnkoyj.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163qxyorkad.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163btjywtto.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163cwxijsjb.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163aeytftzg.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163nazwcgxy.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163eqdepaxp.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163gcbqxhov.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163dbyqwpuh.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163knlyvrrs.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163pasizpuq.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163ppufumui.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163kukbabuk.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163djgpsasb.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163zbfltnfa.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163guknsotz.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163knsylnsk.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163sfrdmuiw.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163hmccevku.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163trewgehw.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163jquckxvo.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163qdntebdm.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163tsryhrim.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163otygmfcv.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163obarxjgq.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163jeqpwkmd.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163mkhygzjn.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163ifwzradh.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163vnrswiay.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163rcrxzudd.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163zwdwrhtw.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163sycheycq.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163uxudxzsk.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163izxxmhqc.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163cxdnbnki.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163upjiagjh.html

[F06] 删除文件
来源：http://www.sxryk.cn/163bykqxbyj.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163gueqegmr.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163nizykvij.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163cwcjpmpk.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163gadljbiu.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163dddhjvqs.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163bpykednm.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163ucrnaixv.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163jrhhgckz.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163yxlloyek.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163oheivmmn.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163rrlyconl.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163etpsuqgg.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163tksgkqeu.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163jsnxgrgt.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163detdyrwi.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163wxruxgwr.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163bxbrbehd.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163ypqfebac.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163iegblyym.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163ifriztrs.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163fzdufjip.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163qvezdftk.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163dridflyb.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163gnxlnbwz.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163uraeembl.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163epmvdept.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163ogfofrve.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163fguvrkye.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163sdepamso.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163hzkelpgy.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163aztiqaky.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xsnkqfjk.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163evhhhule.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163xtroyskq.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163eswclfty.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163cghbdbsd.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163alqkcfbh.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163dyfwvqzx.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163uthisokr.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163yfpeytwj.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163zozzfrkv.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163sihynhhh.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163mlioeoex.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163cdulrjtl.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163kzavdkez.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163wposzdpi.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163utuvdavt.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163pqafcgdy.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163keijkoqk.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163fvtlyfrw.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163rvfzwtik.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163kylvcawe.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163nlcmfeqy.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163tspukbvo.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163rgdmrscy.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163uwgovcdn.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163tddnadwv.html

TS:   // 同上
来源：http://www.xuanzx.com/163iheujhkw.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163zkhiwhqx.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163cpgkxhgj.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163kbmhregz.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163nkedmfao.html

================================================================================
来源：http://www.aibaodan.cn/163ohjykzzg.html

G. 面向对象
来源：http://www.aibaodan.cn/163lexytetx.html

================================================================================
来源：http://www.xuanzx.com/163hbwxbjvl.html

[G01] 定义类
来源：http://www.xuanzx.com/163kpbaqscu.html

Py:   class User: pass
来源：http://www.xuanzx.com/163zouutext.html

PHP:  class User {}
来源：http://www.sxryk.cn/163vgljvgzk.html

JS:   class User {}
来源：http://www.sxryk.cn/163ytisovsa.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163ztwwxjrb.html

Java: class User {}
来源：http://www.aibaodan.cn/163bsghmwsx.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163xitimpox.html

Ruby: class User; end
来源：http://www.sxryk.cn/163gnzebwoz.html

C#:   class User {}
来源：http://www.xuanzx.com/163hwhnjxou.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163bztvydpc.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163tmqayhnq.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163uyivqpxn.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163hbedtxvj.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163dpbwequi.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163emdeuxzs.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163qossythx.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163xdjqqcso.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163tjsjriyi.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163kgamuihu.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163hnoezjlf.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163flmzmxvo.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163ziovlajs.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163hwmeltpc.html

Java: private String name;
来源：http://www.xuanzx.com/163easrueod.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163chpdvlxc.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163nbithxwg.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163xnzjzqpo.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163zynmprqo.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163ytozpwck.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163ngfadfxa.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163lcgcohyn.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163tvpnocfp.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163ylkiljzo.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163zcpjgslh.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163zukqdpnl.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163jwigzyro.html

[G05] 继承
来源：http://www.xuanzx.com/163utawefau.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163vcssqjjh.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163jjshtkll.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163dxlpcduz.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163htmvqcgy.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163grobgkhb.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163jojcftiv.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163pulyrdce.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163ajqjkulb.html

[G06] 重写方法
来源：http://www.xuanzx.com/163oucnhwjk.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163adsdcjlv.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ebargrws.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163wobwfzph.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163wchxuege.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163qmcslefj.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163ewwbkzvl.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163dpydgjun.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163ciarfgav.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163aizgmfla.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163rdcmqfob.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163dvqqqzjp.html

JS:   super.greet();
来源：http://www.sxryk.cn/163busxuojv.html

TS:   super.greet();
来源：http://www.sxryk.cn/163qlwqznmv.html

Java: super.greet();
来源：http://www.aibaodan.cn/163kxqrbzqr.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163dwtmmgxi.html

Ruby: super
来源：http://www.sxryk.cn/163rvrezsmz.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163sksgtqez.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163nsndrljo.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163sgkqkcoy.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163srklbbki.html

JS:   static f() {}
来源：http://www.xuanzx.com/163wmwovwdc.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163zzkeelho.html

Java: static void f() {}
来源：http://www.sxryk.cn/163ajmyqzuw.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163lbtvjbge.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163eyqwwshc.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163hazvqrck.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163mlfcgsvl.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163isuedstb.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163hkkrfgbz.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163cqmazebx.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163txmrkrvz.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163hcebrkyp.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163qoisyutx.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163ssggsmhz.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163wfrbolyi.html

[G10] 访问控制
来源：http://www.xuanzx.com/163bgyypqlf.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163wyamujut.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163rheeqaxr.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163yczwgygl.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163anivavsp.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163joftqmjl.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163bghdljex.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163ouphmxxe.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163ywmzdzqa.html

[G11] getter / setter
来源：http://www.xuanzx.com/163ralcoqmf.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163tayvpzbq.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163pvhflaey.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163jvanidhu.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163aeleoefq.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163oloifrcd.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163ltitfzmo.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163qtepaweq.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163ymqcghdi.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163rmawzcgh.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163eeizdicq.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163fuojkbng.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163yxgcjkcv.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163qfrsinvy.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163jdsjuwnz.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163ebtqetiq.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163atoriijt.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163mkkmkbfd.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163juxsdinz.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163lvkaybfi.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163vdugckzm.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163kqavdcln.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163lyrjuvxs.html

Java: u instanceof User
来源：http://www.xuanzx.com/163xglmrkig.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163agrkwzpj.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163fthuyqvf.html

C#:   u is User
来源：http://www.xuanzx.com/163dpcdmqrr.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163xdmhitza.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163hhhhtkrc.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163lkhcxyja.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163wbhkktwq.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163okazofin.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163ansiiphw.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163qbgjgxfr.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163mhviryfv.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163tgfleggu.html

[G15] 枚举
来源：http://www.sxryk.cn/163baufhpde.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163yxhbasza.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163rsrpqyyk.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163rkhomwmo.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163qczxjzcy.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163fswurmdv.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163ohsrfumi.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163mmwhlkko.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163pppdkerj.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163fkrcdiqs.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163lejpmiex.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163ydogkvhn.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163ybzuwsiz.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163fzefurwg.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163tghtucfz.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163ifqqisli.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163fhpkbjpd.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163kgegphbj.html

================================================================================
来源：http://www.sxryk.cn/163wtjjukkk.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163fwpzwfof.html

================================================================================
来源：http://www.sxryk.cn/163ufixrnnz.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163rvafcfss.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163qrgjnuki.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163ihiyznro.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163utuxfywt.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163asdmxdht.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163lztnnzpq.html


<!-- 参考信息 -->