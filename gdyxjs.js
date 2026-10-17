外链999!wailian999！

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163eekugvuh.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163lxqcpgnn.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163wcpkzhdu.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163xdrsbxho.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163zhlkacoy.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163mulwomxr.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163xmvldqvq.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ntcuxexb.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163axzkdati.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163gkumhfhi.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163nvbphoxu.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163ukkzydoe.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163naerljwq.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163cvmlolda.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163tgtnbdex.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163uxtunryp.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163hywjcmhq.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163rdlnujuk.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163kcfbglee.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163nlazeffx.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163mvipxrxh.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163szfgofdv.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163xhjutipw.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163ipyuhomi.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163yvqkxnro.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163inmkmywt.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163nmgibxyo.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163cxtunwaw.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163ddtgajdg.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163fcdbhjwj.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163slxfwkkl.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163gykixopo.html

[A14] 注释写法
来源：http://www.sxryk.cn/163uyfwlncw.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163cxebjkmd.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163pzvosrli.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163dpxgoueo.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163zjcnsddo.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163hwtnkfjc.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ipbsrrzn.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163otmgglmn.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163khsodhqb.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163sklpfkku.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163hqrjnnyx.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163htgtdgcq.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163zpfbeapu.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163gswxudnk.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163qqfxrrsg.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163shyrkbeu.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163drueefhc.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163ebfkqgir.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163zisbeoct.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163kphbecze.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163mricjbeu.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163cvmoalbn.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163aqwmgbrs.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163guxemtbo.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163ukmfgoho.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163joetearn.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163idusajgc.html

[A17] 位运算
来源：http://www.sxryk.cn/163vhydtggm.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163abxfbvor.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163suofctui.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163nzzsgtgi.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163dpwxxvhp.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163zovhxqsb.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163cxthjnpn.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163xdzvsbyu.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ydzacpxg.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163ljzeholi.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163aagzoarb.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163xzjiqtke.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163ytvkhfhb.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163vcyiizgn.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163lymbsems.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163lxtlsawe.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163ifmkmsrx.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163vaoruurd.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163tnkkbwqk.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163tswhabdp.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163acgdezls.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163zlbllezw.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163mdfzhibh.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163sbmcrsjr.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163zohkxouc.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163htljcxit.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163fhzkvtpf.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163paqbaenz.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163wycjzsyr.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163vkcfuisp.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163vyxvwraq.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163crsqaenp.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163pnmfetsw.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163igepvasb.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163fyqqvmbd.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163beezaqpn.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163xradrsjb.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163efvyazjt.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ffzalzmo.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163mhgxjebb.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163neyjvghg.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163txreajnd.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163eelexktu.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163qfygcjnl.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163xgbgkjrk.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163yprkqhwt.html

Py:   len(s)
来源：http://www.aibaodan.cn/163ffjqubcp.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163tsldfedd.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163pxhathex.html

TS:   s.length
来源：http://www.aibaodan.cn/163jruykcuv.html

Java: s.length()
来源：http://www.sxryk.cn/163pawtpage.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163qmraquds.html

Ruby: s.length
来源：http://www.aibaodan.cn/163yvhbmqmn.html

C#:   s.Length
来源：http://www.sxryk.cn/163trfjwlor.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163sqbinizj.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163sxkhndtg.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163kccydqtu.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163knrwtkej.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163lunxmmbn.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163lsyykpnv.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163oysvvcsd.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163yhhwzwsm.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163rotbmasr.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163kzefuzyt.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163mtezhybi.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163ecyuavbr.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163oxfdjicp.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163dyzyynze.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163rushbawz.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163emdvziwg.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163fposxyow.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163iednqqtv.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163mzklbxwm.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163rgoqwacj.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163qptrbrez.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163awftvzpm.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163kvndrqsb.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163mqaxtfqt.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163txuwthqh.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163bauyprpg.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ffxcejaa.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163ksxvidlz.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163cwwkuiuv.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163bmdqtgbz.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163rdyudtyz.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163qdubxfmd.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163oehbnoas.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163kzsiftcs.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163jsnqbdht.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163dnxkqwti.html

================================================================================
来源：http://www.sxryk.cn/163oxcpgxzg.html

B. 流程控制
来源：http://www.aibaodan.cn/163kwmxwhvl.html

================================================================================
来源：http://www.xuanzx.com/163vrwrntdd.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163ingtqujf.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163cyuizhnf.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163fkowyebp.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163xrbbtrvw.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163miokhjmk.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163rvrifphr.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163evhqwrdx.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163qajrsuzj.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163gnpghelr.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163ghtgzuan.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163ckxphmuz.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163jjfaonlr.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163kfhylrnb.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ljyacqff.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163suvzoxuw.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163foqmpflt.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163rpjmyfzn.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163xpjtixoc.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163dkfyqxne.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163gjlqezeh.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163eotygrzp.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163wocdzyyu.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163qssczdlr.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163lidyikhe.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163lxlylfgr.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163jkcujyvs.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163ujpesgff.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163sudurhpl.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163ipionuta.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163gbftenye.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163ioytcvcg.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163hortdqnm.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163ilbidung.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163mahwwynh.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163rcnbfyxg.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163gxjwveuf.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163gigmquvz.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163fijdcjwt.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163eezryzyl.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163xpweslxg.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163tvfpglrq.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163ckqsymdp.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163jzvtkxkz.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163eqxnqkxs.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163kkzrtjtm.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163hugblnjg.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163tkkghacy.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163kaikmlqe.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163chmchxtt.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163nzjmoucj.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163mdvqddzn.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163lbsxkydv.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163ocbvgwuv.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163gcfkulmt.html

[B07] while 循环
来源：http://www.aibaodan.cn/163gumhyyov.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163zrnihwyt.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163xezucckl.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163wlkvwfxk.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ijnyxiav.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163dfumoyew.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163rahmskhi.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163lsgmtdlr.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163hdmrdhzw.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163djuwfisj.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163wggmjbpb.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163ienesbzt.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163elhzdamv.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163vvdckwyn.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163hdvjfenc.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163iibctyem.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163xlhnnnng.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163vcbawghv.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163qctjczhi.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163oqeccjjk.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163hdfcojrn.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163mpvhwimc.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163fhxqrcqw.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163tyhnoydw.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163yqlyhsjh.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163cfgualtf.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163lbfxkkzl.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163zrtvzpij.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163rwqcgbla.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163kfaygcxo.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163doojjvor.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163thaibtoa.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163xrqcwyek.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163lgggxiga.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163osagcuwz.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163tmnedbmv.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163nzupycos.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163jojhhimc.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163erphgupp.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163sowhfeco.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163lnxmxsyy.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163puekvszv.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163pcdyyewk.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163kzlhiyni.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163sxdzgpfu.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163gjxlbdcr.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163hqeejlwi.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163auajtrkt.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163anfsyogh.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163mppqdixa.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163hpcjtdjf.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163trtemrvy.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163uciogbib.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163ukjscykv.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163pcwtcjfw.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163cxhvluta.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163ehwxzbud.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163uumkiaqg.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163irfomcjg.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163qlkkndju.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163undbfrch.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163fqyzvmji.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163gnenhokg.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163dekzwnyi.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163stgmvlrf.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163aooxnkrx.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163eeywhavm.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163zbdhmbmu.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163rgtxcgol.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163tyoxshkk.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163ummflmtj.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163yntzfxro.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163qekmgsni.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163cehfdkft.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163boedcaxr.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163jeeuldzt.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163cyomsqle.html

Java: a && b || !c
来源：http://www.xuanzx.com/163zdcfqpwf.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163jtzgalzz.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163nopongff.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163uhknatcc.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163qixxojcn.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163vneqmovb.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163wvsgvlmo.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163sasdbrsz.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163grkrrgom.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163pjpqwxev.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163bugwvitx.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163mpbygsqk.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163tvlhxyvw.html

================================================================================
来源：http://www.xuanzx.com/163lqrbdtma.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163rqjvczir.html

================================================================================
来源：http://www.xuanzx.com/163jkydubmq.html

[C01] 定义函数
来源：http://www.xuanzx.com/163oidtqmxi.html


<!-- 参考信息 -->