外链999!wailian999！

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163zcdqovxi.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163xlfrxlbx.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163bcjhodlc.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163nabooowl.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163xqztpyon.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163adcgdlix.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163cemqohkp.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ubmpzgua.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163rzwjwara.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163vjotzlun.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163mvjtkttr.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163lkmpxyiw.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163srvvfzzx.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163hmnpehqp.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163ihmywypz.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163qenxwvgr.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163kahdqfef.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163uxpcgjua.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163hfljfxxn.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163vmnpnmnj.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163pbttdele.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163ramgijmz.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163xrudqrox.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163sivpiwfs.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163kyelbwmi.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163rsmtwqlz.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163awxwgmfh.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163ctxdtlcb.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163yxtbzvts.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163fkmddgck.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163bbgjjdmp.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163aytcsuvl.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163fanbsbxc.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163oqfnygoc.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163vffdpsqt.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163tvqeldbn.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163ohsxsoun.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163xmmfijls.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163sjxtpmpr.html

[A17] 位运算
来源：http://www.aibaodan.cn/163bwdqhmrf.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163sgpihpjp.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163rdiogyjp.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163raiwyrvl.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163tyhlxyrz.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163nvepaupm.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ecpukfde.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163dvkgiubm.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163cqkabtip.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163jehupuem.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163jsnzwbqk.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163cpdolxxb.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163kfpqnnnk.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163znxllexc.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163plzctxhg.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163dzdoresk.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163fizseahs.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163oshpniel.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163knsvjlad.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163heaqlqnc.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163ivtcrgia.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163hzjfklww.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163lfnzthdd.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163sdsizhkf.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163jvzlbjrs.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163fnayosfl.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163auxjzjqy.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163bpgqwrvt.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163bzwgbffc.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163tipexdst.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163ypjbtnvy.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163igpembwi.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163urazqnar.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163hnhgitlx.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163htvzytvo.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163vdccfixs.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163kvpmzrmu.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163bjewttxo.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163prfjdzrf.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163qkfbsfxt.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163wjskpgoy.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163rcmaqtmd.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163wrmuwuay.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163muequncv.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163cmpknxvt.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163cqzdtfki.html

Py:   len(s)
来源：http://www.aibaodan.cn/163duqlkfuw.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163agtrhmti.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163cpmrrklm.html

TS:   s.length
来源：http://www.sxryk.cn/163tyldaypk.html

Java: s.length()
来源：http://www.aibaodan.cn/163cgejkdur.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163cryhdgkt.html

Ruby: s.length
来源：http://www.aibaodan.cn/163pjfmbvym.html

C#:   s.Length
来源：http://www.aibaodan.cn/163baichvda.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163jbpzkxpn.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163nuvodxvg.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163rkmfbblo.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ajefaflw.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163lqfkvrwm.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163rtpqnbei.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163ywfjlijs.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163akiiwccn.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163jaarwdcl.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163jxyjsiiq.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163urpewofi.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163aauevvyi.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163uakgijtw.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163qpsmhssb.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163hhjjijza.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163wdapadns.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163klavunvx.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163dosuposs.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163apajekdc.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163zckzsqts.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163toqcygyj.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163gufuonij.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163kivqairv.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163srcjjwcc.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163hirvhgdi.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163impytlci.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163jcvsjuug.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163oalqlmwj.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163lzgiyjpx.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163fktcmzud.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163moycammt.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163ycylmdwn.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163mcqsbeih.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163yfemsnrb.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163fedtmqmd.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163sbqwleap.html

================================================================================
来源：http://www.xuanzx.com/163nywrmeod.html

B. 流程控制
来源：http://www.aibaodan.cn/163hwnckaou.html

================================================================================
来源：http://www.sxryk.cn/163ojnnehuv.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163payyirao.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163ekgiddup.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163vfomhxcj.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163zfyhoxmz.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163nrouoizu.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163lzftgjse.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163sxyqzvoj.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163nqumjuiv.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163lvvgktmm.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163ybrznhjn.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163ljyuazcl.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163pvvlklqo.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163rnrkppdt.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163jqnlbcpk.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163lpjbzfho.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163ryfnnsya.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163atmtaahr.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163crdswvni.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163akjyfhsm.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163yfhqdfrd.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163pgxiyuyd.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163vezdluju.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163sfdiahdp.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163gfxlbidz.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163qnyoaued.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163vvfpdbjw.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163qabzhoka.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163iaagfjxm.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163elhmfwdl.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163cxyimjnb.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163fvisvhmo.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163zzubbnqx.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163kmwnkawg.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163vczrybpm.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163mnzatipw.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163vueiqexz.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163utaatlmi.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163eqpgepum.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163feygqiwp.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163xlkvgmxz.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163nyexbnpa.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163tnqbxsgl.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163rkgjchbw.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163fodmzhaj.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163pxmqsprf.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163bzyvmgxz.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163vkmfyvcl.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163oudtpxif.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163cyxnumfp.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163wpcyzktl.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163obhvpdam.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163abgnoxnt.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163thzawvqb.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163gzzamadc.html

[B07] while 循环
来源：http://www.sxryk.cn/163iekqkmyn.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163sxfyixzf.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163fvetfsxn.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163golubanq.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163nghkkkfq.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163jzekvljf.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163plcxwwek.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163jfbjuuhs.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163kiyhdirb.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163jzasohyw.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163nvcxufjw.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163tephmcia.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163eqzmbrsb.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163kmebqdfs.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163omdkzdgg.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163lielykct.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163lzdsqxym.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163proifiht.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163akskfago.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163rufosmvj.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163msyuzxjp.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163bhetbseo.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163jrgyxpkp.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ournahok.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163fwbluhkf.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163yhxwftjo.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163xruaxciu.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163fqhwebbq.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163mdcbfteg.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163pvwfubld.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163lwipuxnq.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163clfxtdkv.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163nntzwfgt.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163zmvtdwzk.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163xjujombg.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163wtpsnxsu.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163ojjfyyhh.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163ukmejmrj.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163mzruicdu.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163flxjvdhx.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163hhzxncwo.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163vyrtvqnw.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163uxzwxxdd.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163fvgmysik.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163ixgrdidi.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163mcmemtyk.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163qdgwacjc.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163cqzpmcxs.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163jpyvtafy.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163uxjpoait.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163dmcnrwtb.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163gxkigdxw.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163uhmceklv.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163wpdorcih.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163nfucdjbw.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163aexmnorq.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163yyihhmag.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163osiateyy.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163fofzgvro.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163sefbfrjp.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163tygytdns.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163zhluitnd.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163runiogmk.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163xjproiay.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163lpoqwelc.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163dgofrzlh.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ieuvycvs.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ngaawgpp.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163ejmjyroq.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163ecyhfoys.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163xbrskayl.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163ffjngexj.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163dgybagsf.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163eibieivi.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163raejxnvb.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163sapnppff.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163syrryvpl.html

Java: a && b || !c
来源：http://www.xuanzx.com/163fzglwnoa.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163rceqnoyh.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163rvzhiatr.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163hgafzjtg.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163xxumyifx.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163bhzrvztl.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163oylcijzu.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163ibpxtano.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163vtsjhqnr.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163ihkgafdf.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163qxajhzzv.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163gnbopcyz.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163wsrraqyy.html

================================================================================
来源：http://www.sxryk.cn/163odoftujr.html

C. 函数与作用域
来源：http://www.sxryk.cn/163ydcrkkxb.html

================================================================================
来源：http://www.sxryk.cn/163clrcwrqe.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163pcweidur.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163ttgghyav.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163wuizkbio.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163fmqtkaan.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ypbvjkmy.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163wzmflpty.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163skgxehsn.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163teqjooaw.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ydwewioe.html

[C02] 默认参数
来源：http://www.xuanzx.com/163acooyqzl.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163rnwqyaof.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163hsttevzp.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163endbmkay.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163uvzpyoxt.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163vfvkbchk.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163dlcudggw.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163lztglkcz.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163gqxxssrb.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163snsrorxl.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163zaihwkyw.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163noaissvg.html


<!-- 参考信息 -->