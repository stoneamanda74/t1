外链999!wailian999！

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163vxkpsnnr.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163xxtcxcoy.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163qqyvsnju.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163gtmrbpzz.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163jqsyijue.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163ghrfyepw.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163pemahpge.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163sjtvynhb.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163wisebvzd.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163awexpcoi.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163jpahaggn.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163ucmsfabw.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163zhmbhnyn.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163ictgfnbe.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163ilgbwcwr.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163qffxpjhg.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163qeinfghc.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163piixyaai.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163jodfalnc.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163vbijnwrn.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163rfesxqru.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163wrgrtwdw.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163ovmmkqnf.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163ctmzrnoa.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163vegoutjq.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163drhsnjdi.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163gqiwbktg.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163qdbcmqfx.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163owzbgkcm.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163nmpheedd.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163hztnqiry.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163ewjvvivq.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163rrqgzdtq.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163fkypswtu.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163wpqiepbz.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163zjqxtdaa.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163bgzjdedm.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163jgtnvxfj.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163zisslcch.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163gsbzszlo.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163vjhpisqh.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163ostrhzao.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163byhfdmga.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163qrgnlqlc.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163vtufsgoy.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163xlmnnypc.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163catgqcrh.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163kglvtylw.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163azpazxeq.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163fczkwqtf.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163uzfmhzux.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163fjhlorqh.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163frzweacx.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163dkcqgiqk.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163xvsnuljy.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163fqopzqxi.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163ruklrozi.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163wgjdqmnm.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163bvtmrvkq.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163opknwhij.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163rsyrkptf.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163fclnisgs.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163rzvfbgct.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163roztwzxc.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163wzvioaeg.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163kebzqqar.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163pzerzgzg.html

[A17] 位运算
来源：http://www.aibaodan.cn/163avceqfma.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163yruzqrhp.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163maygwqhi.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ojrqmrry.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163oclszsko.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163lmgxadrd.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163tcrdrwno.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163dcubqbvd.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163xzgqtqmt.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163ctyikrbb.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163dpvduzlb.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163vyncjlfn.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163iykzlvki.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163httbxeia.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163mwftrili.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163lpsbjeqh.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163gttlhvuf.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163hwsmxuqt.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163qjuospvy.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163unvyrusw.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163ihgbcygn.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163kbtvchzu.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163sxplargr.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163zoetolqu.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163alfhlihh.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163mckmiamh.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163arjodghp.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163ruoaxohe.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163qxdmawsr.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163vivauxrt.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163gfdijvll.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163zfnnwpkn.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163zurqsvvp.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163jxvlmlgb.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163afemspjh.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163jntosjuj.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163acyrsjsg.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163pbusbgiz.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163rtcuslda.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163vfredggi.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163emqquwct.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163plspwbgi.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163wcpxsygs.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163aqeopdyz.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163mhfoewez.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163muqniddm.html

Py:   len(s)
来源：http://www.xuanzx.com/163avuvlhuj.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163hmuernno.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163sutvfzlo.html

TS:   s.length
来源：http://www.aibaodan.cn/163ldickpma.html

Java: s.length()
来源：http://www.sxryk.cn/163mbdbfcrx.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163yqigsbsq.html

Ruby: s.length
来源：http://www.aibaodan.cn/163nvyksxjy.html

C#:   s.Length
来源：http://www.sxryk.cn/163xyomfzxg.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163xkwxkike.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163ynyfudvq.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163olmzbvjs.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163axfesrhi.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163kzfsskia.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163auzebpsa.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163izbbigav.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163tyfqhzvu.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163wfozcxny.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163vdifbpku.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163noerubjy.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163twesftpw.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163giewkdyr.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163iuygdjxs.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163psvdaqlz.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163khjpdjrx.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163zunirkyx.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163lxednmpr.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163vikynhkd.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163ohsmmdux.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163ybnzmmfz.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163kgkovyzg.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163kpwjhvje.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163qrwayzdg.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163olwnilcv.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163otytjvoz.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163accraqqy.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163hamqtawt.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163zpkobcra.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163dtlzunwn.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163eqclrbep.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163labqwdtz.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163bvzjqkwg.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163aergvkgj.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163occqnawa.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163eyolqnps.html

================================================================================
来源：http://www.sxryk.cn/163dbzvnwkw.html

B. 流程控制
来源：http://www.sxryk.cn/163vxdssolk.html

================================================================================
来源：http://www.sxryk.cn/163urqirvfz.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163vzvcycbi.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163xaybeajz.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163opexhukg.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163hjuzcoaz.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ovtcotzy.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163dtxyrqpj.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163hyyhporl.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163ejmzjmro.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163qlisihce.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163eotfgrkb.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163vsaoishw.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163tmyhfydj.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ylzqiyts.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163rnazjgam.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163emcqjdak.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163dzvddkio.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163ezfchpeg.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163kalttieu.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163aegyihqo.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163ixpgagao.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163uujcsrtz.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163aaxqlxad.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163mxqwvodg.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163znlfvkjf.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163qvlksnsy.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163lgrnjrxk.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163cffcqdfe.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163ofkeayfh.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163hhhaghbh.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163wfvtpeai.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163gjvftrzr.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163qsalxteu.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163zrlezpdd.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163skvwxhix.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163lkecpdfw.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163iejjubop.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163ztklrqhg.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163aoqpvcvw.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163lvvpmtja.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163sthtshby.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163nfhktaqr.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163whpmmnqi.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163vfucbktj.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163vmtpmiyw.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163paodtncz.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163guxjehsn.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163vmmzabzr.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163fszkgnjl.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163xqeapjep.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163maqaxakp.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163zbawugmq.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163uvooydrt.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163awclclva.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163nlsuxszj.html

[B07] while 循环
来源：http://www.sxryk.cn/163tqekvyiq.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163jqpdjfem.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163safhcsyb.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ffsdirgs.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163vixiqmto.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163yvphqylg.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163nphxgamv.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163rtcycatx.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163kbecauqb.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163ecmvikfl.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163ifeljqus.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163qlvemegt.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163pnqcugtz.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163fpfdfoxa.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163sjomzbnc.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163igrzaatf.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163alxptbwe.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163fjjjfaxj.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163fepokbps.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163bjfnimpq.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163ihxxdzkq.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163sbvsbnhz.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163lluydpbi.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163grgadysq.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163liaztkyn.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163ockqabcw.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163kaqgdbim.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163flgwkksg.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163uaktcemr.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163jzkeqfsm.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163zmrjyzjy.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163aqfnwblx.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163znwqrahn.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163cyakipcb.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163eacyhcnu.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163mgexokky.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163msefwhyf.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163awiexmsy.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163diludmcd.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163tiaxghbr.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ktjdazwz.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163zvbiwewg.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163krnljhsu.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163mgmcypdk.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163vvzqilov.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163jsqohqpp.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163xykxtgix.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163smvupuqz.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ckfxxhuy.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163usbqhwdn.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163xgwaxriy.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163begfpjvx.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163uaztnobc.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163srrfylpl.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163gcxhkkdf.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163nopxqpvq.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163ekrxafrk.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163wsayinpt.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163yuvgfoph.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163bzpmutna.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163mgnfuyqg.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163hooodfmq.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163losuzncb.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163hkpyneaw.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163koprunfg.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163dcjypeed.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163gxsaowly.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163uczqtvuz.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163mtioqqdz.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163dmkcjhty.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163xmoqcpxf.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163oqqhbcls.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163dwbnoadj.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163acawmrqn.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163uzuiaijq.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163hsedinsn.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163zrxwhugp.html

Java: a && b || !c
来源：http://www.sxryk.cn/163zwyxicrk.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163difsymog.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163owoswccl.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163iymljtlp.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163acrwdsyz.html

Py:   if not data: return
来源：http://www.xuanzx.com/163aajphstm.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163fdyggaau.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163aiqmmahr.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163xbtpktpr.html


<!-- 参考信息 -->