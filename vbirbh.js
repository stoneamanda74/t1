外链999!wailian999！

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163qzgaqdry.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163kijyhdni.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163wdzgnllq.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163smickfny.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163baeqptun.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163ujuxjlox.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163uhiuwjkj.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163xyntrjrd.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163qnazmnmb.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163zlqdaayp.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163mdrmxrxr.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163fzldponw.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163guzfuuxx.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163xfcydhne.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163yrnoyzlq.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163apgtdelm.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163yqntmjyf.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163szrsypbu.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163udwshwwz.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163cfnwfujg.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ufepbaxg.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ejzwynsh.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163eopybhnt.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163zvcbonas.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163ryjogern.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163bsxrgrle.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163pugxjley.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163mqgjabnw.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163cnsnxqvf.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163qsvozkmi.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163qlefiwla.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163atoncang.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163wjukoprz.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163gggctinp.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163rcbdpenq.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163wcaodbje.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163mkusygli.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ywzheeoo.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163tlrtmczl.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163sydgzhwc.html

[A14] 注释写法
来源：http://www.xuanzx.com/163jszryhlk.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163nxclccrl.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163ghxvshsn.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163lfeojnvm.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163yimkxbyj.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163opgnodqh.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163jzflpzsf.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163ytgamqwk.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163vcnbmxzf.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163rivsbshy.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163auhtdgej.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163fzuzurop.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163sbjgxbbg.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163zjminjdd.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163jgmmrepe.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163fnjuwcaz.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163ntecmqdt.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163snqentld.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163gnqvupyu.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163dbttwyuv.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163mbpoaaqu.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163mnyciwsu.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163ikfdefao.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163xphklxta.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163emrksuvr.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163mgxnhxml.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163dzrprzjj.html

[A17] 位运算
来源：http://www.sxryk.cn/163csbbgnwz.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163tszzdsup.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163nthwcjou.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163regaukjl.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163tbpwregu.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ocfpzahh.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ltlbqumg.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163dntjmsum.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163dhsqraed.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163yzxvfgzd.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163notypyvy.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163ktbbsyop.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163bxvkacyr.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163wkpibdxg.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163qrgypcam.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163thyqfszv.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163owwirqrm.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163endxzmue.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163dvaecycu.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163edcsxujn.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163audqxqhz.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163titapdos.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163qchjgtai.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163ilfarjnh.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163lfpchflc.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163hzvidiof.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163ylykxtrg.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163xalshjke.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163xydpeska.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163rnidyxnz.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163bziesvev.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163hwcvefjc.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163pqwjfxfr.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163alvtwrxi.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163jrzycqfy.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163trbifrnp.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163ziezwuar.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163eybxqjmi.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163cxtopslh.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163fczqjfey.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163rqwemxng.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163uaytfrzo.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163kypsbeiy.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163yvxbfdsj.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163fdjfukyk.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163ejqsfifv.html

Py:   len(s)
来源：http://www.xuanzx.com/163cosipwow.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163htvcbdgs.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163wszwjlxl.html

TS:   s.length
来源：http://www.xuanzx.com/163riunrwac.html

Java: s.length()
来源：http://www.xuanzx.com/163kafupecr.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163oilfsspv.html

Ruby: s.length
来源：http://www.sxryk.cn/163jegxghru.html

C#:   s.Length
来源：http://www.sxryk.cn/163bppnlrwj.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163lgrmpihg.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163nhqlfobj.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163rriidxbl.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163hrflfntz.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163brbuaeoy.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163alhnfxdp.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163caqugvqk.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163eckezynx.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163tclpefxs.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163bagkoilb.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163sloyscdq.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163cgkxnenh.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163zzyzgfwx.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163btxuodvd.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163htgsjsxa.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163nczcisle.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163uqhviozt.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163brlxeuqw.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163hmtzekxf.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163lzzvbdiu.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163msihhbkn.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163sfknlsfx.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163hcudxhyz.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163swqbftcc.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163dizktkcs.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163dgamqpad.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163djzdawxw.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163asxuafrg.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163zytnftbz.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163mavuqetw.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163rgymqyoe.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163rdrtqbof.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163vqrqjhrj.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163stqflrws.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163uccsusre.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163iauebpdo.html

================================================================================
来源：http://www.sxryk.cn/163cumefvtc.html

B. 流程控制
来源：http://www.xuanzx.com/163mlrhbjgi.html

================================================================================
来源：http://www.xuanzx.com/163zkqbjzzo.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163hlltqcsb.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163hhmyrmoi.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163dmjzyeov.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ruglckrp.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163bxunwfmy.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ouhtxonp.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163pbwqjzmt.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163ojdhawte.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163vblflbhf.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163lxixzkzh.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163dwwsehqp.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163zcmohluv.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ruoaiqss.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163oubgilla.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163uryrmwub.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163lytlnkjp.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163srkkekdk.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163upeziosm.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163hctsaidm.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163nrvpghtd.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163zgbgkggr.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163vmhqpowi.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163fytrpzvb.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163fnaynnws.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163ojqrollc.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163drsarbwm.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163cuhkgjim.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163thksiydi.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163hxwvukqk.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163qqtanzrk.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163icepbqpp.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163oummgzei.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163asejhqjt.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163bpjgvhsb.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163upjgvrym.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163mnijxqsv.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163zxnbheoe.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163jjvtwhdg.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163ftcadkxy.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163wipmnvre.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163dihfgfcb.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163yqbfgptk.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163wpqmikhf.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163dggkheun.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163gqueevpi.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163msmdwcdp.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163oabowlnx.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163vushbieo.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163hgiutrfx.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163jzclwdfq.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163wdyxxyek.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163brykrixu.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163astwczxg.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163puwadjvy.html

[B07] while 循环
来源：http://www.xuanzx.com/163chwylexk.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163bgnyeteh.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163nkdrepzm.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163vjfapkob.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163wshxwama.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163stfzcyqo.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163ahgvtffr.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163epglpkdw.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163nlmvscqk.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163hkrqyhql.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163eiqjuftl.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163jduymqrs.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163fzymntsu.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163bfnzsshx.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163kwdcjijr.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163egkbgxnv.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163mmihgzya.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163cgetdhms.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163vfgqqmhg.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163ltbwzuxg.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163rwsnndcr.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163casryvcf.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163booihtjh.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163pinejghn.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163agzipxlw.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163cmtxtihq.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163xenjsfew.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163lpgbvhrf.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163gwwshvbw.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163qdnopmmq.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163ajxdfvnf.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163kvofdbpy.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163sesumhbf.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163wotjrpvf.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163ayntqupz.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163ymsbwhda.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163fnkoxhil.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163nsxjboac.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163dqyzkwaq.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163xieieovg.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163bodxawvk.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163jocmzmvp.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163olxzvzyw.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163gczwdjmo.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163bcxrzzko.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163ufqthlpa.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163qcttwwkp.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163wzyuihag.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163vwdpwtgx.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163tfqqahcd.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163bfksnqzi.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163qyhsdmkc.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163euhxswpo.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163qvcnkzej.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163elpjcoyq.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163jfiranpd.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163lhlnwvqp.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163tagmnqpw.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163hvpjbcwk.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163ydbhrwxi.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163fiycrazh.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163agocksxk.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163xzbylaoo.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163dcpckzjo.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163zfthoktj.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163qkjycqlk.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163kqgmkqwv.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163bmcwxbkc.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163tnxfswkr.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163uddnxaaj.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163ghcypbjx.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163hgmiupno.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163pxarjjok.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163gpnkpbqv.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163ysqwtecq.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163dmfpmujt.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163qkrmiqfy.html

Java: a && b || !c
来源：http://www.xuanzx.com/163fvbeymny.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163lerdgvtn.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163zrapbbhy.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163msifvlhg.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163udnpzcie.html

Py:   if not data: return
来源：http://www.sxryk.cn/163andjuuzm.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163xuczxvdp.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163mezlvckl.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163cqukrigd.html


<!-- 参考信息 -->