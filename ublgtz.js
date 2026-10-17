外链999!wailian999！

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163iqkrqeda.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163cqzgvjyb.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163bortrdbo.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163avkwbdvv.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163wwpxzywq.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163nchjwoql.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163fsvtgygz.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163lmvrzxyk.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163wvacdnod.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163mfefzffs.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163tftusjjn.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163olzwetcx.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163vilrpkom.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163vcybmmhd.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163uuqykqxf.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163hpqwykrb.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163aouzggch.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163hfarpuav.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163evpgrpxv.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163uqwbhmuk.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163qtsfikfv.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163rsymqxvr.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163wpkybikl.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163oimtbdbt.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163kxdyznop.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163mhsomzkk.html

Py:   str(42)
来源：http://www.sxryk.cn/163jbxkfsxy.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163ficnztjl.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163ouzkcguc.html

TS:   String(42)
来源：http://www.xuanzx.com/163ujovupnx.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163lkzsbfib.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163brlnwhlf.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163eqwyuplk.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163brjqhzhr.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163tolhzoyd.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163bcoocpmi.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163ablbkxex.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163cnnvjttm.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163tqunjiev.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163tcgcertz.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163fjfxxlbq.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163yvldtjnc.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163ecrmnqjx.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163zbqblepf.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163przouvac.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163vdefrrqa.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163zqoysvus.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163zcbdabbj.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163fvpbpjfc.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163zlansruw.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163wejkwikk.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163clptdsjn.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163rohmcyvt.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163iwvygsln.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163bfqnmnms.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163kumutcou.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163binonews.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163enwmpzko.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163raniigzc.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163uzyqvvle.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163zwomktxe.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163wuyuuxme.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163dqpwfbct.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163nztpufbt.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163fzlphexi.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163jtmlgxyl.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163xlyxeabv.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163yjvbwghj.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ibbseaym.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ihlrxrbh.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163nxxscahm.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163tmfjpybo.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163dzpfldih.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163yihbvtvv.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163nbvaxtpe.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163lybltedk.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163cnwgojlm.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163cenqjgxj.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163xgtgzkdc.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163fxczhrsc.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163idcyrezc.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163eypjpzrc.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163lmendznk.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163nlxtmepz.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163jlmrhzai.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163dubinpym.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163xcogyney.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163qkokhwdp.html

[A14] 注释写法
来源：http://www.sxryk.cn/163nanzdrvb.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163neezxdrt.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163rnklpkve.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163twwfktzh.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163wjsdgkgt.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163ryjplszl.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163pznkelky.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163slxcndwf.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163nxxbmatl.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163lqzpxeto.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163woeiijer.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163pamvxwfs.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163bdbgljmf.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163wsuaxsgk.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163ajtsqtnr.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163itykitgb.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163wujqosnk.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163gfvornax.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163ptvvdbid.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163tzbyjguu.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163aakkufdf.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163sbdigzkb.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163enugbize.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163lptbzqqd.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163cdumvudl.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163wzuzjqbq.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163yiwouiqh.html

[A17] 位运算
来源：http://www.aibaodan.cn/163vouxlxkz.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163hljwqnqj.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163xlkiorxi.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163illfebwa.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163hkqaodtc.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163qlwbzxcl.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163iycujhhi.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163fqazvipj.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163dkknrzly.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163rwsbbfti.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163vqhjanjp.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163fdwmjmbj.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163wtucfjzj.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163foyprlag.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163krtqdoce.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163bebvrzng.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163eloabznl.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163vxzpzvzc.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163nmfucint.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163xuhfvbyv.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163bkrgtgjg.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163chmptpxw.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163nkhrrzne.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163tegnjvai.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163ngxaddyy.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163axnajiqn.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163lmwkekch.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163lmzkbpex.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163njtkqexa.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163pplvqcxb.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163xfrzemiv.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163hjnmddav.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163xzgnsozx.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163njmudshs.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163gonpsyai.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163mukmgnhw.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163pcgrmbxp.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163eoilairc.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163xpykmzis.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163dqiczils.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163pdqszdlu.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163wxbvzizm.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163kpvdbfmo.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163tgzxmcwa.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163jdxvoxsb.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163caisunqf.html

Py:   len(s)
来源：http://www.sxryk.cn/163garxoghe.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163adtvdwhu.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163kfsudtua.html

TS:   s.length
来源：http://www.xuanzx.com/163mxkxdcya.html

Java: s.length()
来源：http://www.xuanzx.com/163uneedbnq.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163desfwhxn.html

Ruby: s.length
来源：http://www.xuanzx.com/163xrzfhzom.html

C#:   s.Length
来源：http://www.sxryk.cn/163zxraaqsg.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163hezojluh.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163jxtidcqx.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163ynizctad.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163mmrbtnoj.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163wsqvgrba.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163wmmybkhh.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163cpinteyz.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163htbovqba.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163gkxvowlt.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163pdsrqmba.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163agtwxlzs.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163ggfscafi.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163yqwpihwc.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163gysivlzq.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163dbduictl.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163ilztkaoq.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163ogzpqoem.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163qopkqzro.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163hsvlwpzc.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163nnktzyyd.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163lajvghbt.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163itliirys.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163yfcknjvm.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163vnholikl.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163whojtueh.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163rvugjxer.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163glzxynfv.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163pvvjikmr.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163picthkee.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163lbuoyiuq.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163waomaltf.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163qixfvbxb.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163uughajci.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163omvyvqlk.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163gcoyhshd.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163opovjbee.html

================================================================================
来源：http://www.sxryk.cn/163xhparlrz.html

B. 流程控制
来源：http://www.sxryk.cn/163vxkodefm.html

================================================================================
来源：http://www.aibaodan.cn/163kbgxshzn.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163ypislgxq.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163gzvqucty.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163gdttilsw.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163tmajxcyb.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163jsplrwxm.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163rzidpoat.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163rdpewgac.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163pncemdrw.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163hbtuvvzy.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163nagedphn.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163rybvoslx.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163jpquegvt.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163vsxngjel.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163irtwkato.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163mhlogadx.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163ttmurlbk.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163licxtwzp.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163nwsgjfxf.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163vgypllrd.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163nxeubjhr.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163xfnlgpiz.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163bmdhgkjg.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163fqppckab.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163chtfiknd.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163qrfkoylm.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163sejwsnkr.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163pburjgty.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163wrvnblam.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163kjldugua.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163wpeescla.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163wzuthvnb.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163vxvtrocx.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163ozrchjvo.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163ozzdcuct.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163custntoc.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163sxsqmrnh.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163cmspkkio.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163vmhfbugg.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163lccwazvs.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163xbyoafzm.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163andzcfws.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163lqxporfb.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163xpzaqwxm.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163yunecuzt.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163nyectlqc.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163muvgctws.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163dmzpxoos.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163pbrolkox.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163wnxdyznu.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163gyixghnx.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163iyrpptoe.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163qqftnqyz.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163wmifpteo.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163vxzsltnh.html

[B07] while 循环
来源：http://www.aibaodan.cn/163keusjqoc.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163vafpwjhg.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163vnzejfbp.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163hgbuunym.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163dkzwipxj.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163yrphrdkx.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163eylpmypz.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163zvblgvgh.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163yicqghpv.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163wjlztfki.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163gatbifpj.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163mogxlulf.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163bwmaqxnb.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163atjelkmo.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163akozowhx.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163rtiwtmqs.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163nnetmdxh.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163usbmtxox.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163ztmfcfpz.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163eznexzzq.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163hllicnhh.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163piratseu.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163bmwqcprs.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163gbymgoyo.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163zvemssyq.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163quphiprt.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163eyybrkep.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163wvudvrqo.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163ievcsydj.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163vnbaaosq.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163boranrwq.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163euccycqz.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163ytudtsde.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163rhgtejjk.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163ourimkcu.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163woaubpxh.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163wytidyrs.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163hbuapubx.html


<!-- 参考信息 -->