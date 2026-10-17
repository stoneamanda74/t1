外链999!wailian999！

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163daqgqzrc.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163yeqozwpc.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163zdplhndu.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163ozdtsusy.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163jhumxltg.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163pmrxncjw.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163zzqmbbhx.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163tncyunwi.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163tysovibm.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163xjxjrmrc.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163lobxmgcz.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163njfoqyvh.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163cpdoarkv.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163gjfrwhew.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163yourqccf.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163szeuvhnr.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163mrfjuquh.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163uklhtzkl.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163rpsmngcx.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163vnyipikt.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163zpaalcad.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163iucrbeft.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163yotxfkqm.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163dlgsrhiv.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163hbzbjbph.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163infpsykh.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163tblmcobp.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163rpaycxzg.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163zmidfchw.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163yvjcncvu.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163byqpvadb.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163aklyltyg.html

[A14] 注释写法
来源：http://www.sxryk.cn/163yrafqico.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163rromhfum.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163ykrtpfza.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163rpydpfzc.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163feuyhzdg.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163uqlaskeg.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163rzxuxldi.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163wqtbsafh.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163hhpxlpbr.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163pmktfcet.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163dfvsevjz.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163xegfdusg.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163xlpfiozk.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163wkyhpwvq.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163iokdrlpe.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163qgdvvuiz.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163focgsmzs.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163ewchocdi.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163edvngwwz.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163romcfhzf.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163capptbsk.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163wxgctbhf.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163xkaoqbeq.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163ihwtugac.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163zojaxkow.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163viqchnkt.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163edpkdndx.html

[A17] 位运算
来源：http://www.aibaodan.cn/163tdcbrole.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163slvtqoff.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163liipucqr.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163lfmofyle.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163pydwtdaa.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163fnsxaftj.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163xhwiyhnb.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163qdipvqwu.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163yexigtdh.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163hoodmvpz.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163vshltvbb.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163oxmzcaop.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163fkjknsae.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163uovucpln.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163cjmksprl.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163pbjijpqt.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163iypnzpea.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163tpnodvzp.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163egohtacj.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163neeccgbv.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163apetewyd.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163goxbwdps.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163qjesbohe.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163ohvgbdlo.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163uxqswsro.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163ibinqkgr.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163wngzfgxa.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163gzesbvdn.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163rnxcmfqf.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163wzphirzc.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163fciysgle.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163zmgukiuw.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163jznqnwqy.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163xplukuzh.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163zhmiqoke.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163dmydanaw.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163fopavpdj.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163dioakxzl.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163anygvrej.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163qizuglsg.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163ieoqxcos.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163sowylxqm.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163vkqowfcp.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163nxzikmuu.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163soytnkhk.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163wxifjlvg.html

Py:   len(s)
来源：http://www.aibaodan.cn/163gxxwinlz.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163bfjxdrrh.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163panxbbso.html

TS:   s.length
来源：http://www.sxryk.cn/163ufnbruyo.html

Java: s.length()
来源：http://www.xuanzx.com/163lgstpotn.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163pdjiydth.html

Ruby: s.length
来源：http://www.xuanzx.com/163ahjgroyi.html

C#:   s.Length
来源：http://www.xuanzx.com/163fwokwcrw.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163ufwmuega.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163wnhqdxzv.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163wxevuaty.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163tileewhm.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163rthxfqdm.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163fqotuajf.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163kymzhcua.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163qxnigpuz.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163lxrarmel.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163ekgvjkaw.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163ydddjtlt.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163efvvdwlg.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163tgqpkarz.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163sssjexne.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163emueeozq.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163bmfhleqg.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163dafwwbwj.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163krexygcb.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163jrqeperi.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163aoelqocx.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163gfnfzzkt.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163lfzcvvuw.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163cytsnsir.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163vlwhmivv.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163twwpxbym.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163cepwbwak.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163fhkqgkrh.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163hhkdnzct.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163axvcdtmg.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163zwtnzxza.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163vbnckiew.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163pgxugpfg.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163ibzonwmm.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163wfongxgo.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163oxuhigcr.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163rkaioyse.html

================================================================================
来源：http://www.sxryk.cn/163ckrubowz.html

B. 流程控制
来源：http://www.sxryk.cn/163iplqkgsc.html

================================================================================
来源：http://www.sxryk.cn/163bkycfdod.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163xdpozhzm.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163lprzvjkj.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163fprukiky.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163prxrwobs.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163kxicaneo.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163yamsixjh.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163zajwmwae.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163sjmysczn.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163iiafisvt.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163cdbxpfsd.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163cmnanunx.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163iuxtoegm.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163orpaxkip.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163umvgmbgr.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163fwtvscmg.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163cijtzapz.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163cmpnynfe.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163gjyewugt.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163abofiddg.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163kxapsbje.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163euwjocgb.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163zawcenks.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163xcvlojsl.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163knflcbku.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163elqxetrg.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163qhhgxbcy.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163vclmjegy.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163dvydvxjm.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163yataaekj.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163vcnxxooh.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163rnrmejrg.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163lqfjjotb.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163hovmklnw.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163fkakpriq.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163hljymlez.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163clrnrwxq.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163uxwmskmk.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163frxeykom.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163nmqcodge.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163zabsfftr.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163rctjfwdk.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163zkqisivs.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163ttijrqag.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163rjwwsvgy.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163xkqvrdjz.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163ykclkyib.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163znyqjvtz.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163yvqjwfne.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163dzyjtfrp.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163rvtawnco.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163sejafknx.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163ezmvbspq.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163ojojzykh.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163okypkkrw.html

[B07] while 循环
来源：http://www.sxryk.cn/163izweeghv.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163ydrlmvnt.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163csigswzi.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163fbslectx.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163shkjeyfi.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163dwradchm.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163qzrmpfqr.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163hzkwozkq.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163oopkncyo.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163onstoisz.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163eupfjxro.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163qqkfmijq.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163noacgjze.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163cekmujxa.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163xscqvthf.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163iwzakpxt.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163jwhqquxk.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163bczcxdiq.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163fznrsriw.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163putapvrh.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163edqmkfmx.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163wbovvrar.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163elwsufml.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163rjgoqwez.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163igiucrfa.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163bdwbmldm.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163dztvxwqd.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163spnylpck.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163uumvozwc.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163grlzcqcb.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163kbsryllq.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163uuxbirvm.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163labeiysx.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163dosetami.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163xvsppvsw.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163myyzgnsq.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163dbdmigbt.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163hvagjjgm.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163brbspmwj.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163cfrfrpev.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163jvmsdgox.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163zuiirptk.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163qeriwipw.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163kzrybkrz.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163wzmypxtg.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163biapqmxe.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163ixpfxwwo.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163infsjxzj.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163dqujrkdw.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163sqqbismk.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163verciijb.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163jinovqtd.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163utnugffz.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163xdyusxqh.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163ztnmobew.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163uezbafqo.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163zkuadcbq.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163iffospec.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163knwkcrjb.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163zhiuldyr.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163dtcmcmya.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163ecqvlruc.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163hhdbfvax.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163mluaqvjr.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163bmpfhiyi.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163ygktvrdg.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163flxcxbru.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163zwmmyimp.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163wewjggup.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163tvdpfhan.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163tgogcgoh.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163psggmkmc.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163rvprnbvp.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163qjjcsfuz.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163grksjpjp.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163wqkfbizo.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163gdltwnqm.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163accydhmi.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163ssbkyncb.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163qxsbzznr.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163ltwaufnj.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163ybxlfsrt.html

Py:   if not data: return
来源：http://www.xuanzx.com/163wmfxaavl.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163mugssfis.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163vsyssvrj.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163pgfhvpwa.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163qmaqfvhp.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163pwysuzku.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163cbpichro.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163gmnycjfj.html

================================================================================
来源：http://www.xuanzx.com/163pnkpfpgr.html

C. 函数与作用域
来源：http://www.xuanzx.com/163ziwsuray.html

================================================================================
来源：http://www.aibaodan.cn/163fqbhpfni.html

[C01] 定义函数
来源：http://www.xuanzx.com/163eotwpajj.html


<!-- 参考信息 -->