外链999!wailian999！

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163ayzbjfuk.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163glajxlke.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163nhedhnel.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163iimhyzpc.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163gqpqiskn.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163davkojjy.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163czmsapiy.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163vrdtgajf.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163ubvvyyfy.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163ukztmbcr.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163pjugfqdf.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163vyaowthq.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163ahhdgrwz.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163ehaketjl.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163fgdbvapz.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163vbmjlhvc.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163aymalfkl.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163penvtkul.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163ggkppekg.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163upxsfebv.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163aifazlwq.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163fcndbxmq.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163ofsufuvl.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163ztjstxgg.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163sqmlbhoi.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163kmfmdkln.html

Py:   str(42)
来源：http://www.aibaodan.cn/163ouxxsgrn.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163vuhgucjv.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163kqphxxso.html

TS:   String(42)
来源：http://www.aibaodan.cn/163jqjbvatp.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163rtxtxwgw.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163tizbfllb.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163fcjgycnb.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163gvyuhhge.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163exjqkspb.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163efttcbcq.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163goihmjkd.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163yuukqgob.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163tzcadjwr.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163fzqwpsof.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163suflchvx.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163cxjadxns.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163vnkpludc.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163idanxoen.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163saxqeigm.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163hesjjbtv.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163ybuzxyuj.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163hdjpsazq.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163thgveppl.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163yljfbrye.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163emysbjcb.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163deupcmka.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163mpqouguu.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163akmxolki.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163abbtcgiz.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163uwseolcb.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163nfqbuuhv.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163bcurbjly.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163bsaqxxbz.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163fldpomqh.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163eviftgyp.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163ponaadcd.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163hnltvrto.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163jwqelzrn.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163smsqhugn.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163abntmuvp.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163webluvlw.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163djuxepjs.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163qurxnomn.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163rrpaltst.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163dvmxberw.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163syyvepkd.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163wiosxuhp.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163oxaozfmh.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163yoivbodz.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163kgpbdqcg.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163ctjolcft.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163hidwfohl.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163gixkwuad.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163rqgpcofk.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163vwdbsxoe.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163oyraobhi.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163qztgsagi.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163xuxbmsma.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163uxqkhzut.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163nrxcbwwo.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163kehghrbj.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163lmqfjmos.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163pepfarlj.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163skaeuwov.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163djwfvlmt.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163rolgeufj.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163tcwxqqrx.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163bkuioxki.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163adxqiqoh.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163ccptvyyj.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163vrwoshpv.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163kduvsupr.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163lbiybutx.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163zajcldws.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163lnslsnkl.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163guqiecfw.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163cklmvarz.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163tajcffxf.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163juwcjzxz.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163ylxikczu.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163pfvwtagc.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163cdbdehwv.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163ohnqjimr.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163wqbbttrp.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163glynlfak.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163pehhjnmf.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163pcubqnaj.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163fmwuyxgp.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163bpjhaxet.html

[A17] 位运算
来源：http://www.xuanzx.com/163apydzhcw.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163nvgonhqo.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163jxbksxtc.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163vucfvidp.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163qwiavlrn.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163glszjmdd.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163uyqjgtiz.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ukrueknj.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163qvrizqjo.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163asozvbtm.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163oslgzkel.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163ksabgwky.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163vdhqaynl.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163jqmmmibv.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163zbiznqkv.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163wrxdukmt.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163kovqglxi.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163zeqexntq.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163gscnygoq.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163hwciwhft.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163rynjejcg.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163mdlxzphh.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163xlzirgiu.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163dgbyxwbh.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163egpdsbbb.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163bitkuogj.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163mraclekl.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163liahnfgn.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163nrwzrocr.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163syjudzhq.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163debepdaf.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163pavtuvzm.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163xfhidwfb.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163rvjmaepb.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163ytjfwlhb.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163tzsbuxka.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163vidksmoe.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163ldsmyvea.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163pkrqpwkd.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163itofoyiz.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163eawilebh.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163xjcagdjs.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163zerqrcqv.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163mimgxkdh.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163rimlppou.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163otjxigtn.html

Py:   len(s)
来源：http://www.sxryk.cn/163hqyidyhd.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163iaizwlsx.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163ctmsonbr.html

TS:   s.length
来源：http://www.sxryk.cn/163vrzndpnj.html

Java: s.length()
来源：http://www.aibaodan.cn/163vtaiynaw.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163ouxkpjim.html

Ruby: s.length
来源：http://www.aibaodan.cn/163eedpsyzw.html

C#:   s.Length
来源：http://www.xuanzx.com/163vqktwmqv.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163pudhjiqc.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163yujahlsj.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163duaspcsn.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163niicxren.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163rsulijqh.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ipogdktw.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163vvnbxact.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163gthpfkvw.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163egodjttn.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163ugkovgvf.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163kxviizav.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163bwropazy.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163znlqwnvb.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163wotqjlbs.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163voqinomb.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163ghmmbcwz.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163kdpimkql.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163yltkkemh.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163tfufidma.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163rxakrjfu.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163opstbohn.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163fgwazxlj.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163acjaldvn.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163snoxmvqc.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163vjjdrspl.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163twwqkmsm.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163avwvfiov.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163vdwxxhfb.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163reusnzyt.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163xgnbyigf.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163tkvyzfqm.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163xwfjpoit.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163reudlzab.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163bpsfrati.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163zakpfaax.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163anjbxtho.html

================================================================================
来源：http://www.xuanzx.com/163yjbdehsi.html

B. 流程控制
来源：http://www.xuanzx.com/163nzykcwhc.html

================================================================================
来源：http://www.aibaodan.cn/163ucdkibob.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163jcpeqvrm.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163vkqwyzdw.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163gfhtzolc.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163umoydpeo.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163qmorcgmb.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ruikakyx.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163amvpndhg.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163yztbhiat.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163gjuenjhm.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163bqpehbnj.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163kpuehqpa.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163kgcsrnzy.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163vwygxgko.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163xxbovkfp.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163lbqsnqvt.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163youjsler.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163pkndihxq.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163dfphwrbf.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163hqjflpki.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163urnnujxs.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163wcdevoam.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163ejkhpyyv.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163xrsglgev.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163wcyfscde.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163gizdgjri.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163honvlxfw.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163tcbonsoh.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163ifojgxfe.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163qfizmbgj.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163jovpxwcl.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163wdnfpjws.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163qtptuwsc.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163uhkancel.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163mgqhmsvy.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163ilxztiab.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163ngbbdrje.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163dzeqksru.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163upjhiwks.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163khwjkqnx.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163rtllrnla.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163wtnkyhvd.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163avjmelui.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163oakqspwm.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163qhkixark.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163gzcmxbch.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163dojxhzyn.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163bqaiknbd.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163nbdgtdbl.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ggmgmlox.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163tsoiubek.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163cdijprpm.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163sewdezxa.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163njirwkwj.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163cdptxqcf.html

[B07] while 循环
来源：http://www.xuanzx.com/163wlrzxsxj.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163biudfnvj.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163nfjaosmp.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163voohifmz.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163xwwaoeqy.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163gafxpjsp.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163lwfyyuih.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163tpysrtgz.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ffdugvbb.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163xxdvunpx.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163gechfvni.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163nqvjsvig.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163lkgnocke.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163fukrtcrq.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163wthgkurc.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163mzdjzzht.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163ivxcihfa.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163dwwgwago.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163vuqetipj.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163kbukljvt.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163acrngirx.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ccqkadil.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ftrpowyk.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163vyihtvoz.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163gblloblz.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163yrwpgqam.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163qvsneijo.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163dkdqadkg.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163afatrkfm.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163tajntesb.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163sqepaiaf.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163ljnakouo.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163vkepxcxk.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163bqrteakv.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163ydsqfcvz.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163wehktrtu.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163waktpbvp.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163zdpnpxgm.html


<!-- 参考信息 -->