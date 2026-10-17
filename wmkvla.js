外链999!wailian999！

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163ghfbgtea.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163jdnfvcwh.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163ksqgovcy.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163bzevfgeb.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163qcaotdmh.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163khzmdvle.html

Py:   str(42)
来源：http://www.aibaodan.cn/163rplamprv.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163hqrlqnee.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163jnwujsmo.html

TS:   String(42)
来源：http://www.sxryk.cn/163icaskedd.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163tamyluaf.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163maihmhkb.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163cpmrnsdz.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163gigfvvxe.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163absvhcan.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163ogrfkfuz.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163hfhgxyxr.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163qkkwdqzj.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163sydrcdxb.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163jobjecwv.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163zqtaqznw.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163leylkogl.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163cayuxshp.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163mmhyspoo.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163jcyljlib.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163zadvzbrq.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163jjhbxgal.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163zfwmaofx.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163swmbdjwy.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163nxwcwpwr.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163ebmuwygl.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163wmreylxq.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163ustloujj.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163kplybmlb.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163nezxlthd.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163hvtrnrvn.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163yzrnbxvg.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163implkojf.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163qfczysnq.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163hqedqagl.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163pcmlrglw.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163dcaiwvqi.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163pkfwdats.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163xjjxebzn.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163pzolsqif.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163nwcljmoh.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163gkjannfx.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163msebhtni.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163bgdvzuif.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163hlscquks.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163ikgrlyog.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163uarmqpjt.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163zoucmaae.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163rvksdqzk.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163nzmuxahx.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163gfuropkp.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163flehilyi.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163gqlhkgac.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163khwnfodw.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163pxpqqgye.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163eptftjei.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163czeletma.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163lmggnrrg.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163mvzsncad.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163poraokpc.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163kvmfugxi.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163shdgvrjl.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ougobbun.html

[A14] 注释写法
来源：http://www.sxryk.cn/163htudnucj.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163rbrceyjn.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163caukjekw.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163sbupzpzv.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163glfdnuzx.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163cnhgexfv.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163pqersfbt.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163gdkzrlqf.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163pntliyqz.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163bliahfwb.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163evwpylpy.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163vsegojpy.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163srvdnqyp.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163hpaglzfl.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163prmcourh.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163bfrlxhxx.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163mirfxhje.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163duqkuoal.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163leuqmoss.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163ijbklqbk.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163oxikmzmz.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163ugakanip.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163ayntyjas.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163voxezmnt.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163vpmvydju.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163rcoxnzjq.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163qlzcrpvi.html

[A17] 位运算
来源：http://www.sxryk.cn/163deeysbtr.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163tgudbujf.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163gsnspqpl.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163whvlndfi.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163fepwawut.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163hdhcsvoj.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163fkubkvcn.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163acjreeqx.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163livcueke.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163jtezjwgv.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163sbkupddv.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163xggmpapk.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163jguuksih.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163gvbwxbya.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163iwnhkxrx.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163vptlpguc.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163lglisnlo.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163fmaitsab.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163qgsgqiml.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163rppoggac.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163dexxckqr.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163sktvynjo.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163yfmplzgg.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163gyaxplms.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163rmfuvtna.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163slsxsdmi.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163qwyvmjqf.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163scorqetw.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163rzjbbtxc.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163gigcdwxa.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163jrfcqngp.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163vdileayu.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163ejnbznfg.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163wxkeosoo.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163qxhgucau.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163nhqnvyjj.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163eshwjtqr.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163xoyunlvr.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163qcqqiaqg.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163rqcchlfb.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163ktxwlhmh.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163fvumijct.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163xlcsisqr.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163dlcpcrvz.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163jktibpke.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163evomjrni.html

Py:   len(s)
来源：http://www.sxryk.cn/163wkqlnyfc.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163fupqgnol.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163endtvftc.html

TS:   s.length
来源：http://www.sxryk.cn/163aelnqfvx.html

Java: s.length()
来源：http://www.sxryk.cn/163soyrojsm.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163vochgwfp.html

Ruby: s.length
来源：http://www.sxryk.cn/163jsyatrst.html

C#:   s.Length
来源：http://www.sxryk.cn/163pzphmyaf.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163hegsdiji.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163mxdlgpdc.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163mwqchxqh.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163jxpxcuhv.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163jidxioed.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163sjodobul.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163csmknwed.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163hhgxsjrk.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163lwckgjpn.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163dcaniowt.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163kndlohpe.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163yllmglle.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163ixjqxrmf.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163qiabfybi.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163dmurxbmt.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163vzgnihel.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163hupcabzy.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163jxfierpm.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163tvkxjxrx.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163hzerdsnh.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163jsjkusgf.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163nmhlzacq.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163gticwawn.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163jpicxzhp.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163pwbufkqd.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163txstggam.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163mmrhogze.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163tcufyrxb.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163xdajrypp.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163opvxrafj.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163fcfskexr.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163kdufhcdy.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163kdvkopva.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163dowtfvzn.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163ukrsfjfc.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163tituekul.html

================================================================================
来源：http://www.aibaodan.cn/163rzlgwohz.html

B. 流程控制
来源：http://www.aibaodan.cn/163uhtnksph.html

================================================================================
来源：http://www.sxryk.cn/163uxdpoind.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163avnuuyle.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163dmvjzwqc.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163uenihgwf.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163litxpted.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ndxhpquc.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163hxyqxado.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163dcflibdp.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163ufbeeiau.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163gnpjucrl.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163ifduchri.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163jmjufppk.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163sxrkojwc.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163peftrumj.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ikryzxyp.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163sfgxeknu.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163awthxexe.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163afjgxelr.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163aglyfppk.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163ylelobbb.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163chqhavng.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163kxpxonab.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163qtojmgcv.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163rnezmmff.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163ixrcatqe.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163sucgsdur.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163wftfijth.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163irvmmrlf.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163qkltacjp.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163aidifxwv.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163qqlhhxjy.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163ckdjdvvd.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163nzbdztiv.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163qybsidpg.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163nwjanzjq.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163hkbzhdsj.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163zwsjbqxa.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163zxjzyaje.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163xpwowetj.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163srwqroxr.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163rfiikrvu.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163wjqebmfw.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163ghwjqzkg.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163vgkzmxuj.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163grrjdjnj.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163rstsaebt.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163wijumvsf.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163hvpyeixc.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163oxzzpelj.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163docoldfq.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163pvufgycr.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163cegcvias.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163ewcowjla.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163yuipssxm.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163vcaqqxqm.html

[B07] while 循环
来源：http://www.aibaodan.cn/163kgogfswf.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163pswwhyko.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163xfvxujau.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163snomkmcr.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163iqjnhvvh.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163dsfyqunx.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163lhklwrjs.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163jralvyit.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163jouurtpm.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163lhybgsre.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163fikztfcv.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163wwhpanym.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ntsghqvk.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163lfjnsuqk.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163jsljbwto.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163troospyd.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163gytrxynp.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163iycbtbew.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163phhpggog.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163bzqgqjug.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163xyfbmtru.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163wmncierf.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163atemizwp.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163iqhajxqg.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163olgctluk.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163fzuegjee.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ecryxodo.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163aqsjryoe.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163xahbbxxi.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163yxiaagej.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163qwtysrbb.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163watfwwjq.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163ymkflvoj.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163gnrgnwmk.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163ekwwgmjb.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163baaoglnv.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163hbqvmtgt.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163inregmlc.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163qhjumfvy.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163erdfjyok.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163cknloips.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163ieffeuuo.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163vdbpxtbs.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163sdamdhas.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163esqlikwv.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163dkjshatx.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163penkeibw.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163tnimonkc.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163siambvii.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163xlevcwce.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zshdfjxn.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163jpaumknc.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163fhwfhnkg.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163gibvanjq.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163krwdtzgr.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163sioxixgv.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163epyhglzz.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163mgpxdvgt.html


<!-- 参考信息 -->