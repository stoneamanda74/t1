外链999!wailian999！

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163opvxrqyh.html

[A03] 常量定义
来源：http://www.xuanzx.com/163hkssjfoh.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163elntvkip.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163buztswtw.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163pwotjbut.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163ftpqedhm.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163bebvnfvq.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163psoloeyk.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163saqltzsw.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163afclcmto.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163pxlnnfbo.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163ewuctlfs.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163tpthjwih.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163ilnbvmgo.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163wsuadzkj.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163sdqqtzzu.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163cvydsepg.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163nryhvlbo.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163jukyjqaq.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163hcqkfszm.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163rxtwtliw.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163foivxzvx.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163crgzibwj.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163ctgsmidu.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163eylpltab.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163whncjqvv.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163ptzqmdgt.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163gtjufokl.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163ttirclpv.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163fpopdflg.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163ozcugxvx.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163dpdshxxa.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163diyrzeyr.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163kxrclovx.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163qkjmgqei.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163otgntwpz.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163evjasode.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163njsrusvl.html

Py:   str(42)
来源：http://www.xuanzx.com/163hepuxxxj.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163uymmaohn.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163sfroufbn.html

TS:   String(42)
来源：http://www.aibaodan.cn/163atmbgeth.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163wjawxytr.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163mixupkdo.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163scvsxhcm.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163fhfzamqv.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163mhjtxdsf.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163oernlqzq.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163whkwrugo.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163gzqjqvec.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163utkpokfj.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163csuhcmlx.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163igktotif.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163szynzgzg.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163luvljibz.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163gwshuibq.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163epnfeomw.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163ipnsammj.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163jzgmuztd.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163kyrqzjdx.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163sdiywoti.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163mjmcjwlw.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163zusroywj.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163mluvamjr.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163xlrqvqre.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163sebrpmwq.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163nssjvcja.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163hmswamvs.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163epzhymgr.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163yifodrcc.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163rsntlkwm.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163ptqyzqxm.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163nyviexxd.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163fhtjlkhu.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163jamlnydv.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163kzhiwvfo.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ybzvuzgw.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163iaoqakwj.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163jqnnpeva.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163okrupuhh.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163cbzvrppv.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163kgmdglgt.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163guxkjobs.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163fanxlpvh.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163sojekzbf.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163jjpsxfgu.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163tmupcqdv.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163nvfsaaxh.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163wacrjhfm.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163jctbddey.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163qzrhhksq.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163doognhhp.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163halqevsn.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163zyhxvvib.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163yuoubeht.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163symclwnq.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163umkdqepd.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163vfjkvomy.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163ubqmoyvm.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163pldfhxuv.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163joewetct.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163lwgfomgg.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163vzpiwzvc.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163bubyfsyq.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163gwayenxr.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163txfcbskt.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163iztcwqwh.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163mrmzguam.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163cbeoszfy.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163ucolqvrj.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163uazhsftr.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163jyzzdlit.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163opkhekqj.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163ipvkfngh.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163ywbgrjhy.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163ecopzjzo.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163hgznifwf.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163kbstlsbu.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163dnvchmci.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163mtzhhxls.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163tbpwpswx.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163pqxihoiq.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163mosjliox.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163xkurbpgb.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163shabdcyv.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163qnhbxxlz.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163ociuwlhf.html

[A17] 位运算
来源：http://www.aibaodan.cn/163ggmpjgyz.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ttrqmpvc.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163fxunfgjc.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163zgapjsrq.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163mxsklrbt.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163gxqprvhi.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163bhmwlfyd.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ukpadaph.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163fsakhcgf.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163szismyab.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163fzdsowut.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163pawddsno.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163beknswla.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163pudtrhlj.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163powmyyoe.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163qxlirmfz.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163ukxltoxv.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163zunjpuee.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163qsrdmhxv.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163ndtlmvib.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163jrjwewzz.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163lgtrdill.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163rtcbzxix.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163oiapixaz.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163euxtmeyu.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163clzbugic.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163zsvlczfq.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163mzhjyjmj.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163gxpjkikp.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163xmsyyrcq.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163bsjxgodg.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163iftkwfgr.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163yaotwczm.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163dtzhwwtb.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163rqehrvdb.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163gkbmphvc.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163wequxflq.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163bmbuykei.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163hcmtwgks.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163nxqjqhok.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163piqqrdmx.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163psxxaejf.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163gdniofpi.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163fifgspwa.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163ggswfmke.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163mllpsoml.html

Py:   len(s)
来源：http://www.xuanzx.com/163qoazqnlq.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163phueygcg.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163irxqqjpe.html

TS:   s.length
来源：http://www.xuanzx.com/163chlcjvrs.html

Java: s.length()
来源：http://www.xuanzx.com/163pxebrpkg.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163bphgzxad.html

Ruby: s.length
来源：http://www.sxryk.cn/163swcfphof.html

C#:   s.Length
来源：http://www.aibaodan.cn/163fvvxymvx.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163awilhhrj.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163uuyeswsc.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163hungffae.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163tybyvzos.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163daqncmbw.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163uhfylvht.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163cragscrl.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163tixrqfsw.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163jjwtrkqi.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163jgwttfvl.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163ohfzktfs.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163eqmzmcay.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163hrzpqaar.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163hqmoyqxy.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163oifxhyrm.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163tdxtxpfr.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163urawvwli.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163zmtxxckw.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163ldpobytf.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163eduupwhk.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163brfnbddj.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163zasdxdeq.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163hsrceuwo.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163jeacxapp.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163brokxzhf.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163jeorymlf.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163idcrxqse.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163qeascsac.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163szopfmyo.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163bgtxkznu.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163ieueaavz.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163ztrdlnat.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163cnptevlj.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163xipcvonp.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163oegyxijf.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163twkenmyc.html

================================================================================
来源：http://www.sxryk.cn/163honvwhzv.html

B. 流程控制
来源：http://www.sxryk.cn/163hlnryhao.html

================================================================================
来源：http://www.xuanzx.com/163fklarris.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163onuowfen.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163uzwkinky.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163jaaegxcl.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163onjjcmsc.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163nngicxvx.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163sigexqwu.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163yzqkkmub.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163afoblbpw.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163oksgkdoa.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163flznbizk.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163oykkojvh.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163hbedcttg.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ctgayhky.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163uygucsvc.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163gxkhqmfm.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163onzydztt.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163qmioszdx.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163karskezy.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163bmohcxzi.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163rylssaxh.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163xzbhcaaj.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163mhrjwyww.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163vckyexyg.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163geuviyaf.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163wvihaidx.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163cdeafxbz.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163ujntrayn.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163ouzjybnk.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163iqeddddm.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163gbbkzfnp.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163munialjw.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163bxzdgwrh.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163dtbtubkx.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163fdbdipxi.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163gceykdea.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163kqaixdau.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163xqeynmte.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163vuwurcmj.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163ftadzpsi.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163xevtsmxj.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163mlqijpcu.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163wqjonlyx.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163evwvtviq.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163eldhcdbq.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163aibtrvmb.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163ylyhbjgr.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163axrwxmqn.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163mchzwsqz.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163utyxxkon.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163vygxplnr.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163cetwrysv.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163yqcccpoz.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163npeupnhy.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163lcqjfuon.html

[B07] while 循环
来源：http://www.xuanzx.com/163gvfgxrrr.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163xczuecom.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163qoxfrmbv.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163hefqqauj.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163iauheqmc.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163rlynnnhg.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163jjvfjgyt.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163jlmupsqj.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163hpthivos.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163tqjmmzzw.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163nbagsvbj.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163kqiwwymd.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163fsnhzdkj.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163adtmoscp.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163sujntobt.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163cpuzrqdb.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163hsdtrusg.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163gazpewfg.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163pxxlnxtr.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163vqvlbcug.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163aohzwctb.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163oukjdkrl.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163evbwlxql.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163wshnoqwr.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163mgvaxobv.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163mqvzzuda.html


<!-- 参考信息 -->