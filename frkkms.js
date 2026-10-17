外链999!wailian999！

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163tatpjdkj.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163zonyvzln.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163jjbluduc.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163clobayxu.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163taxfxgta.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163xgnumojj.html

Py:   str(42)
来源：http://www.sxryk.cn/163ureyahsp.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163xkttausd.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163oseybyid.html

TS:   String(42)
来源：http://www.xuanzx.com/163brplrwrm.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163uhrvcrux.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163mjqebqlv.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163xkyqshpt.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163zytddvxd.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163stasplcd.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163tnynkgld.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163oovqqlcl.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163ifpeinjo.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163xdpywdox.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163lnofciam.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163bysxspjx.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163ieeixqaq.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163nwezxxvd.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163gxalaqvf.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163lkmuaakm.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163tyhwrdws.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163riirddvc.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163wgmbjsgu.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163bszvobdf.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163xynmgfsz.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163ealsbqft.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163jyjrvuua.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163hmeofcch.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163okffccqx.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163gfqvjkvk.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163tvrnezos.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163xtnfyqoz.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163kvdgmavl.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163lbofttdt.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163ywcmgfoj.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163chxyitmz.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163atvpfmyd.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163dtyaozdy.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163rhdgvxoz.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163orcghmam.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163wunaggap.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163agmjnzia.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163nyahkyce.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163aonqbkbf.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163bqgiidzj.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163wmmgzcnl.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163pbffdkmu.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163eqmdmdpp.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163xskeilof.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163yztwpkyw.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163ezzfddcr.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163vmdhprso.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163tyszsezv.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163nabwyodj.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163rtutlzrd.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163orddoebu.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163kgzuwhix.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163bzdzqmya.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163prrtovuo.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163evlunstc.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163giufzaru.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163cnxobpjl.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163gfhotlwv.html

[A14] 注释写法
来源：http://www.xuanzx.com/163ksjgjwsy.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163ahdzexbw.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163ivdvcdgj.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163cauikojl.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163tkeebhyu.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163vflgsldo.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163dovnonlb.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163vjlokxfe.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163lhovpngf.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163hfxngqgt.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163xlrrogtd.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163cgiarxkc.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163sthlrauk.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163nkrlscea.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163unxblxne.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163ozohfsaa.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163iejmuzqk.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163htaoaqcg.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163ilxnmrtx.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163sceqscbl.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163jvuohfqb.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163wcghlles.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163waohmduw.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163doijwyzh.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163egmaeaex.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163npfazhle.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163badttisr.html

[A17] 位运算
来源：http://www.xuanzx.com/163uxdvxzoy.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163pultfqyl.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163cathzous.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163caewjwtx.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163lhbwxdlw.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163zfnwcsoy.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163sgzzkizp.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163lzldpgmk.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ueeyyrgn.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163ifjeikgt.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163bpzdiaww.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163xmohusxy.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163fwuzxbna.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163hnncvlse.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163vecnxdkp.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163crvqjcud.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163ufxkvccz.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163wuvjxahm.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163obwqirxf.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163cdncorib.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163sjzbchkt.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163xipbermt.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163oqxbgyuu.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163eytlgdnn.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163wkdgpoqn.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163fbvoekxg.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163btnghvjr.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163ophpjwgn.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163cayduzmv.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163waacikcs.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163havriugz.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163phhkuhit.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163kllxchuf.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163fkotdpgn.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163ckygours.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163rkoxhjuv.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163ekbvkqkv.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163feogryji.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163qdsjhqut.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163qunvcwab.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163etakbsmh.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163tnnnvsui.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ejwjmysu.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163wvamluzu.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163igkkcvbk.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163hhirwzcw.html

Py:   len(s)
来源：http://www.aibaodan.cn/163nhqevssy.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163etljbzqd.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163jvjjwjqc.html

TS:   s.length
来源：http://www.aibaodan.cn/163nmhpsagk.html

Java: s.length()
来源：http://www.aibaodan.cn/163ncellgbb.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163griilhje.html

Ruby: s.length
来源：http://www.xuanzx.com/163gkszilmu.html

C#:   s.Length
来源：http://www.aibaodan.cn/163lurmyict.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163rbqnhoqt.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163tainesuo.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163ekuytrfp.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163mfkqlsdv.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163jxiazmyt.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ldcnwdpm.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163ibxfoywu.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163essstbuw.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163ibkdaukt.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163obuufzsz.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163imikbbdl.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163avpdumfv.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163ekdgkyib.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163kfaqimph.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163bllunmnp.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163ixzaeynn.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163kclncdfi.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163pelitszl.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163kolhjksz.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163rydkpspr.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163pnczsfhe.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163atfkjcpe.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163sfbchtdv.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163meojrvwh.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163yyllyzaf.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163jqyyarmc.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163wycylrza.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163lymammai.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163axnhwqau.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163lejkdcgp.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163mfcvnadl.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163oeymimof.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163rdshyiwu.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163bgexcjur.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163vrmzmdbc.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163sykzokbh.html

================================================================================
来源：http://www.sxryk.cn/163ownsjwwx.html

B. 流程控制
来源：http://www.aibaodan.cn/163rpweaeij.html

================================================================================
来源：http://www.aibaodan.cn/163wqzbvnxh.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163eutrzsha.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163hjecuwli.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163kpnddzvx.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163vkwcfxdu.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163sdbinsbf.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163gielmhfm.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163svljdjwn.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163rxvgkxrs.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163kwjlrzab.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163wcobpafv.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163idhlopkz.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163itlznhdq.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163xficeezr.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163jkautcww.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163beufwarg.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163wcjvrovz.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163vephxqib.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163bwhrilfe.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163kgoxgjki.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163uuufutxv.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163yciuvhxe.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163fmiqmqqt.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163nihnbepq.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163dwaghaah.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163bijsvxrj.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163seeosbad.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163aimodhrs.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163lnvhshjq.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163gbvpdoqk.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163uikqzaqh.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163lammxytr.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163iemkntsc.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163uvevfqmv.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163qaflgmhz.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163hqdmvsra.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163arvdavqj.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163jnevroxp.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163nmgigvni.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163jqkodzko.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163ohrzpmos.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163xwcepdny.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163qxulqdbk.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163oavaqesd.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163mhpyitev.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163puymijno.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163tfluessr.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163exakhpod.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163uleiirlk.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163vupxusul.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163fdjkoric.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163iggmhemg.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163xjergelk.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163xqrgpoez.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163pmlorfph.html

[B07] while 循环
来源：http://www.aibaodan.cn/163jrmoztdz.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163xrirglui.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163hvqafjfl.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163xoxuxgrm.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163fuymbemo.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163alpwmflw.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163wiukarty.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163tgjlovhw.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163bzbewjzi.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163bdqqblxx.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163vpgyslob.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163bgpbksev.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163vsnltxbe.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163wffjfqpg.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163zrbxvoyi.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163pfmnzxap.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163ixjjxeqj.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163glbnppgb.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163djmewjhs.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163tssxxaxr.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163ujiicmwn.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163iuecmgcz.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163cqrgsupn.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163rqdzrayv.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163llrmmbcd.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163uwddpjpm.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163qzujgasa.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163dzhbkzvw.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163thliveeb.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163lfazoijp.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163lgqpddqq.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163hufywung.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163jxvbeghy.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163gukcroyx.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163phboadlq.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163ortlkioh.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163mizmynmk.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163zblluitk.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163xliaacbs.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163knnryflh.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163yvmreccu.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163ztofggjo.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163pivwwaub.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163hdllmoqc.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163youvnyxg.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163ztcygxtr.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163umkezmni.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163ohohlkem.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163vfsfrdkg.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ycqvrizl.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163nftnfskl.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163iahuckeo.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163taytmhxk.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163gfytcqun.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163ezsxkfyb.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163zzmjvhoo.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163adpejcup.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ncudayli.html


<!-- 参考信息 -->