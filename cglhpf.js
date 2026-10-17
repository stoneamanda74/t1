外链999!wailian999！

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163qzwrgsfz.html

TS:   String(42)
来源：http://www.xuanzx.com/163riezfczy.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163ovlgivvr.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163egpsompm.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163vbvynomc.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163uwymjaba.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163uajsrcbj.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163kyzoimwn.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163uzchwlev.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163dpexsohy.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163nyjxmcgo.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163uazglows.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163kkutxxye.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163qsohafop.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163pfstvngw.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163vviovuad.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163wbgsiesh.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163gbxaaewh.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163htqmdmjh.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163jqsmjqgd.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163osojadds.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163uhfapuoa.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163nfvvegug.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163zdszskuw.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163xxhbxlcr.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163ocoktalc.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163llyyprac.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163krfxvdnw.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163porazdal.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163guxrenyd.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163vuasfdur.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163zhshidsd.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163ywamfbdr.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163ldpjiect.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163mxayasfd.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163eaenpecn.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ztebrpfs.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163asghmyvh.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ryeloytg.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163ujlegbis.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163edweuafy.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163forefblf.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163ywwgygyt.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163ptphovqt.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163dvtyqfxg.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163zqrkbbgi.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163qlxpeuwi.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163wcekiqhb.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163luhfmnor.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163hxblzyco.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163gqclvsxc.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163lufuvaiz.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163hawvaxwx.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163msoeqnsk.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163fdokkwsc.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ccyqfivb.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163qnbafidl.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163qwiuweqs.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163yjnjsglv.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163daziilmh.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163jmeocqvf.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163tmchoyig.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163gnyqpsgv.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ddudgklc.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163lzygqfjh.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163lwhjaczy.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163gpejjpiw.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163xzkcrejo.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ytcqjmsm.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163pvmitpku.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163vshjogzr.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163dvifohga.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163tlegvjyo.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163gtskhcpb.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163kylcwuir.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163ohfaycpo.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163pswzjneh.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163tlnjonnu.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163igohpvmu.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163fgetimpw.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163uqxwbbky.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163pxnirghy.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163fseqnpzs.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163esnmluhb.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163fcrojkfv.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163wyjhnfjh.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163udmivbib.html

[A17] 位运算
来源：http://www.xuanzx.com/163ipovhrgd.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163rgbbcize.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163ulrhickz.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163sfviawci.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163hqvgazwv.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163pmjskidq.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163gqmqxkxq.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163dydiptzi.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163gclqzpce.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163cqdniani.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163unjekzee.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163qyhhmkzh.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163bgaetcws.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163nfkdoyvh.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163yebcowgo.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163iyctlcuh.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163zbcuusga.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163shokzumw.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163qzavrdxg.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163iupiwbfn.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163ttnucoxo.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163bqjtpnkt.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163efuqtifu.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163gisxmawb.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163zynjwsag.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163byrrcmco.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163vwnliemf.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163nvleldgt.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163negfmbht.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163milguvsh.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163kuwpzfgr.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163owukxoov.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163zwouiorv.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163pwzcward.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163znznemcx.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163egioqhew.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163tmlvtjru.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163kmtcptsx.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163vqiyackx.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163agdupzos.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163qwhgxvlb.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163jyxcolks.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163thqhlxsp.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163xnibleku.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163baoaupod.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163dpkmzhiq.html

Py:   len(s)
来源：http://www.aibaodan.cn/163xdaummqe.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163tnrbxxav.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163tnwrjscs.html

TS:   s.length
来源：http://www.aibaodan.cn/163rmazzeyv.html

Java: s.length()
来源：http://www.sxryk.cn/163ymucukgo.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163rtxkrjes.html

Ruby: s.length
来源：http://www.xuanzx.com/163fkdtgcxo.html

C#:   s.Length
来源：http://www.sxryk.cn/163engynbky.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163msixxhyu.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163jukzuqbg.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163pojnbljg.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163vfecdfuk.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ohmkmzyr.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163kgfttijx.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163eupknlpb.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163wizxzgqk.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163qleddmjd.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163lghkxzne.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163akqjzxqp.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163rejqdzza.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163lhmpdayt.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163bvddejux.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163qohwvtgu.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163rnhrnsya.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163nwiumhmq.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163madbzdnd.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163hwxabwtg.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163mcvgoura.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163flpjqzgn.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163trcplydp.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163hepssjyd.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163ekbjzdcn.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163agjyjlab.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163aawahpap.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163hpsifbpl.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163amilygbf.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163lgwzeykc.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163aayhphiv.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163uhfsvysx.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163zhzrfkdk.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163erxgruwp.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163ynebhbsd.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163cowrtrzz.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163mrmaoybw.html

================================================================================
来源：http://www.aibaodan.cn/163dpfrourj.html

B. 流程控制
来源：http://www.aibaodan.cn/163umxmjgra.html

================================================================================
来源：http://www.aibaodan.cn/163odrnpybc.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163ufqeeqcr.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163skqumuzu.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163dqeedxmp.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163qqrrvoyv.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163zkuqgztn.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163aeuszkjt.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163haebvvwx.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163jlsbfifh.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163kkytcjfg.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163pwwcwwod.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163ghdgoowa.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163rewxqqle.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163phoeomxd.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163yrvzzwkd.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163hxtprutb.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163smfdrtxq.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163gayejfci.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163rrknydli.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163vtbuogyh.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163rjblzxns.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163pgxmxcfk.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163xcecrjfy.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163toylbxal.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163miahdosc.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163vlwpacif.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163gajoxlyn.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163eqwcgwuy.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163rrvuzkku.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163cpudolgr.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163yaqlstxj.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163tmdwyhcb.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163qkizgigi.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163fppvakrh.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163meuqeofz.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163pvlsyaif.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163atkgqwgr.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163ljpevght.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163xszvfyvu.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163oxstdstd.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163sitiwdrh.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163nmxvmuhl.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163roiozevh.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163tbrwhqes.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163dkebonnc.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163himljnel.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163fjxpkcsy.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163dtrnrkpe.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163wzmscemt.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ybwguwmm.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163cxwiohqw.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163ligqkkdo.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163crviizsl.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163hyhrvcdb.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163olpgfujr.html

[B07] while 循环
来源：http://www.sxryk.cn/163skmlbgpp.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163foqbvqyu.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163qoktwqke.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163oeywzwyr.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163kycduhyj.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ghrapppg.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163vmhgrihd.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163cydnxatw.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163znuqnvwr.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163yzldgtoa.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163zvmcdyra.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163bsuviitz.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163cvocvkqw.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163eflqnbhq.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ltzbtorg.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163rxzzdxkr.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163qsmehmcj.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163bwxuwden.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163ztdooyqh.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163gyvskohm.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163kmipphhl.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163lcfakhpo.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163qhdamggo.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163buntgoxm.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163mcrysxta.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163hfbmbvqq.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163kcacatmf.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163aqkitwxm.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163quyhumkt.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163juojkhju.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163crwizwjq.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163bszzlkiq.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163hftpygux.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163jukzvqzq.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163xpicgskv.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163cwyeeeiy.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163mfkrqyzk.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163mdfdayvy.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163wdzutmyb.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163pufvyrbo.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163idwqvajm.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163tyykguhq.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163qttgdgyn.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163spjisorb.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163vlhlzfne.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163gyvllbbq.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163dghmmdzr.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163qzjsyvdy.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163cluqplld.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163bcqvuxzc.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163lofergwr.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163qaoauufh.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163lhcsyvlu.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163hzwbbefi.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163ipbsvvdp.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163mhfufhru.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163kcstwjwi.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ssjeexsc.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163krwhkrzn.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163lcqreopx.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163fbijvlfp.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163piqzsqqx.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163wjjjehsn.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163jiqwujgt.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163awlzmgyb.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163ddszhivt.html


<!-- 参考信息 -->