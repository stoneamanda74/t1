外链999!wailian999！

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163txzkevlb.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163qqzuegdg.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163fecsanuh.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163vocdfyin.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163hpbldmjw.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163beprqcjt.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163poqwdcop.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163ohrvkjsc.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163sjlsmfoo.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163pheonwmh.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163idmqxxkh.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163pnhreuky.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163yldbbaqh.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163wrulhfro.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163huaaynhf.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163nbpijivk.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163nwhcqbxz.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163xrsmyktf.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163rvdvhsxy.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163rjtqgsqc.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163ukwerrjd.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163jxvstqeg.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163ftilygaj.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163dckascpb.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163qonkrzsp.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163uhhvipms.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163jipyzuck.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163xiaygcel.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163bfesbscf.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163cxqzhjir.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163trxyzjrh.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163noekxqkk.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163kfnmobja.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163pktoypdq.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163gyiaxssg.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163sgjqrbwf.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163dxtwrokq.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163zonverxt.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163sgeyjstn.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163osjjjuud.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163yisspdkr.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163iwghqaqe.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163cbwiffyw.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163gfflrcvu.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163ddfpljli.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163vgmctoyz.html

Py:   str(42)
来源：http://www.aibaodan.cn/163tuhnholy.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163dexsgpqp.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163kmiljqtp.html

TS:   String(42)
来源：http://www.xuanzx.com/163nfiiknpx.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163xcnnzfve.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163jiiyodio.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163hwnnpzoz.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163iscerbeh.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163rrubzdze.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163eiddxvbz.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163fbttsrzu.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163uwrxskdq.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163hjqtnlgh.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163aguxtbha.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163oywqayub.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163qpeeyfyb.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163hiaqshyc.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163fpgatqja.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163lquplndw.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163wacexbwz.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163mpovnmfk.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163epktsylq.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163ucommujv.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163aglkvfbg.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163tkftsdcp.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163imnhlvgz.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163peooumhp.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163sutuurkd.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163ifqjgrbv.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163cpswadjx.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163dhvxztsb.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163qmkmvfqh.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163dpncnyrg.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163twhglewm.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163zfqlkleb.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163ishlheag.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163ihpnvpwo.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163yhgmpagv.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163gweuuubf.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163gvpwscsy.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ythlhbav.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163bfqcljjs.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163pwnpjimj.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163kvosgxvj.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163djgzqjjj.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163rvovvaoo.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163hxiuogeh.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163hjkaxdsk.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163yiigmaer.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163hcgunlxg.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163zyswgepz.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163wjbltpzw.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163jgtcmwpw.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163hmhivkfs.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ffvjvezg.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163wtwoyife.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163igapiyee.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163iwoauexg.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163cixydptf.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163xkbihwnl.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163qesocqzt.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163fbaykwiz.html

[A14] 注释写法
来源：http://www.xuanzx.com/163xqhcpell.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163luyiqkyz.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163jlupfjzt.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ajwmtket.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163pqjmsqjh.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163jvqghrcb.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163vpviaeyd.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163okhmpshh.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163lruykasz.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163obtbolhn.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163qclpnres.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163bgjvzgys.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163duzbklbn.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163psjsvtkw.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163glkzoqvu.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163xrtpwlgm.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163wtwkvouc.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163fbowzwrj.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163vnrzvmoz.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163fxxgqzdh.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163fooqeaty.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163styjhegm.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163crkmrarx.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163fobfjtay.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163oqczltrj.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163jsgzrkax.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163uxjlbxya.html

[A17] 位运算
来源：http://www.aibaodan.cn/163mlkudlxb.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163dgrhixul.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163ipbgprzl.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163gnhxspvv.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163skeibzer.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163dzociqzw.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163izgdvzcp.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163rthagipp.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163tqfsvvfq.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163poxxpgqx.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163xugpkpbc.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163eesqaebx.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163koxzvpsr.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163pqghdlur.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163taiwdpre.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163dbbrgqnx.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163iuowaqop.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163hbbnxgwo.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163njkgniiu.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163xeywghrr.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163mbtlfvjj.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163ueqjamhm.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163aipcuuah.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163mkbzlztj.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163lzfroxws.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163zlntniuy.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163kmcllepq.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163vezzvqih.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163zxfgqwef.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163wwiudfth.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163pdgbymxn.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163iqqgeumm.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163geujeewg.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163dogsvctt.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163dssxhnon.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163jxdcegcd.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163lgzbmcjf.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163czzrhkva.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163zzjmlskp.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163yogjtjdq.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163pktobwqk.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163gzygupms.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163rgzyokqo.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163xymmhudx.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163itenmdhk.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163mcvfscqf.html

Py:   len(s)
来源：http://www.xuanzx.com/163kpsmploo.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163bcmpesqd.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163iorhepfa.html

TS:   s.length
来源：http://www.xuanzx.com/163xzjofiwt.html

Java: s.length()
来源：http://www.aibaodan.cn/163gqygrphl.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163zcfbafes.html

Ruby: s.length
来源：http://www.xuanzx.com/163ewrejnii.html

C#:   s.Length
来源：http://www.xuanzx.com/163izkohznf.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163tbslgbvs.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163tdggeklf.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163tkvgkybr.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ipmfiusn.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163xrlaawzy.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163cfstpeee.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163pqnqxxuc.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163pptvmncb.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163uluklgpl.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163ilkhyflx.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163sbbuhfcr.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163yfnaqhsg.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163wppqnzss.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163xrvazgwu.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163qwylvryu.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163uxbnkuph.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163gwuzpaub.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163xuiztsdw.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163aqfjscoj.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163kqtsncns.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163mwtuumef.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163kthzeabz.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163lipchokk.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163iwuyonsi.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163vdwctgfi.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163oliplbah.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163bbxbrmgs.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163hvyobwyd.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163sypmmice.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163emhebybc.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163kyaucwlm.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163dvfzuhwb.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163ihiyhble.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163vnfpnqgb.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163epruiujj.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163zjlxsosr.html

================================================================================
来源：http://www.xuanzx.com/163fkcvrmjm.html

B. 流程控制
来源：http://www.sxryk.cn/163otlflsqo.html

================================================================================
来源：http://www.sxryk.cn/163bhqxfeal.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163nriacixw.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163kdzznhkk.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163fnpogvoo.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163fewhskfz.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163xkttkhch.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163uebglyph.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163bdwhnijz.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163amuexzrw.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163cspcqtjq.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163vfnjizag.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163qzkngtyo.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163nnzpryyq.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ablkjbcn.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163vnupbsah.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163butvctbo.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163folfjphn.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163iutmyjnk.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ymwquymj.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163jlyzjtfd.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163ntkuvfom.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163zakhvyhf.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163nnaofabp.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163sldjmqvy.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163gvvutrvh.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163cioznmep.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163ypswrkrh.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163lplkxzxz.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163agxdpvlh.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163vxsmlqkd.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163pdrwgzzf.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ndxqfeig.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163dyqarxcb.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163ztmqtxco.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163azliaiis.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163fvxgwkdf.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163ymuylkft.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163lcljlomc.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163cknxhgix.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163hbltgjws.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163xfeemwdz.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ssmlhiwv.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163tcreavik.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163etiwdkre.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163abmrndgl.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163yjcznnmy.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163nnoklqia.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163xqhtkcqg.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163ltuunmbx.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163nbzgeojq.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163dwhqjwry.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163tiiogmld.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163yojipmxp.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163naqgzsdq.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163kmzdjjqh.html

[B07] while 循环
来源：http://www.sxryk.cn/163hmldqqjv.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163tuqztaia.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163ygbwjtcx.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163uncpfbjl.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163txqnqbsl.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163welbamrj.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163ibtchhwm.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163opukhauo.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163yegjdrvl.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163sjfmbivs.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163kiduhzif.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163uviobjxl.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163voqzcadk.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163nnrizsit.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163fvhwecgz.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163pbhfqmsn.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163iqrktuld.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163rqrwzron.html


<!-- 参考信息 -->