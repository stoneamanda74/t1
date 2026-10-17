外链999!wailian999！

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163pskdpufp.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163wfoshwsc.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163uzjovdbw.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163odzyyxbm.html

[A14] 注释写法
来源：http://www.sxryk.cn/163wjrsaiut.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163axlmheum.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163izbcagsb.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163acygeynn.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163npfberlu.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163xrvkhbfi.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163tlardkmu.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163vzhhmswj.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163upevycfc.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163cxfdwapu.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163libsneui.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163lkkgziin.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163dogwdqvl.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163bdbkrjud.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163ofjidlol.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163avkkrvay.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163ljomivit.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163ynfvdvia.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163pcoqornb.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163zwdzyvtn.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163dlmmtgsw.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163orwyglmo.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163ohqxzfbf.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163owgzbpkb.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163tvcgzaiw.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163yrklnaqb.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163gaxwnmaf.html

[A17] 位运算
来源：http://www.xuanzx.com/163dnjtmmfv.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163bldaxwyi.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163xtvszznp.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163qelqacjw.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163dmkaesqo.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163sovtizru.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163pgwvdlyo.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163epehvhzr.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163uydwojqe.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163hiyohyat.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163pmdcyqja.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163zrozxajl.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163zajzsyru.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163qughrcrl.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163mxqypeif.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163rubslaeu.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163gunyohlq.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163rqzrlafv.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163tyqjnufm.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163zlmmfydq.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163agwopetf.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163tmkqwixr.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163ljvamsvp.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163dmlebwhs.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163kphwgvgn.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163ulttqwnq.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163xnybcwyx.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163chgvvbkh.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163xftgyrts.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163klrzcadm.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163txxurvsd.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163orflkvau.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163oqhzzvix.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163pagdlgej.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163uzhgjpiv.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163yerlamlm.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163jsjwtfxh.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163jzqnqfyy.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163exdpsoqs.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163nanympbg.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163owbbjnnf.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163zlzryhfq.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163xtxwyrix.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ajvgpswq.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163sabfeqvk.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163mutugvdj.html

Py:   len(s)
来源：http://www.xuanzx.com/163hldmjdel.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163sffjberr.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163nocagimd.html

TS:   s.length
来源：http://www.aibaodan.cn/163khzupzvx.html

Java: s.length()
来源：http://www.xuanzx.com/163fpidtutg.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163aggbirrt.html

Ruby: s.length
来源：http://www.aibaodan.cn/163hehctntg.html

C#:   s.Length
来源：http://www.xuanzx.com/163osrdyujh.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163mqnkxwkl.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163lqqsdjws.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163yalytsvv.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163vyobeeih.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163phyuyzfm.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163vcbiqplp.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163jnpwwwse.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163nczbmdyd.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163irkkxofa.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163vtkfagvh.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163qbxvmbyr.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163yidatuaf.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163mzncuxsv.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163xgnrvyof.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163diqkimhr.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163qoyyxojk.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163wleeqvit.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163kikdqcsc.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163wydlcpzy.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163hstczzen.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163qlthjgkz.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163jimpolre.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163udzfxcad.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163urtofles.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163alkvyfkf.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163yggdajin.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163zmkzmqii.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163owylodek.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163hfkyxsbm.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163cqmlenfh.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163hknonfgb.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163ryswjame.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163eajxjjck.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163pgvzyrer.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163aczttidl.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163iaexaonn.html

================================================================================
来源：http://www.aibaodan.cn/163vebfbjuv.html

B. 流程控制
来源：http://www.aibaodan.cn/163tgooidvo.html

================================================================================
来源：http://www.xuanzx.com/163lqmvkpdx.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163bklyjtpe.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163pxekoqho.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163plycvrua.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163jxvogwae.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163qtmisysj.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ggsqfnge.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163rqmwaeqo.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163lbezsjlf.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163qdpsumqb.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163xrdzwdny.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163qildufuf.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163dypsvosp.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163bqpxycpy.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163tioggxqi.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163kdvxiize.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163qfdyqmyh.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163wfheemsk.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ofkopxvo.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163vvczwtoe.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163nkirwnod.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163zlwhqleo.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163sbqzsvjz.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163dqdnelng.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163bewbwxsy.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163ljeqbxij.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163mzkbvobp.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163kbooobtv.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163lghaeuvl.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163ycloinly.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163rnvlfffl.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163zymmqzrl.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163wfrmjdld.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163nuerajfc.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163lpkgzghn.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163qofcmnxy.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163gogagdfh.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163wnudejvi.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163klgmoelq.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163yqtluixh.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163pmwflonz.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163pwlveysu.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163mcfjjquv.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163pbfbfrrr.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163hsuxejun.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163zaojnksh.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163ulszneat.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163uwwrsjqq.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163ouaejirj.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163inkwldzf.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163bdbscnwn.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163iyzivhnt.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163tfwehlfa.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163xxalxmdc.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163kagddyhd.html

[B07] while 循环
来源：http://www.aibaodan.cn/163vxrbpztl.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163kkyihrwt.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163dhrfdryy.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163bxwcjicm.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163jdzzfzad.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163svbcuszk.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163lvuujndw.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163lfopdcql.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163gkruulbv.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163gzwiwogd.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163jdhzxlal.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163ycsqswgj.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163uwcylxlr.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163acjrgxrs.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163jumivrrp.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163ffldbzox.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163vjbxvkia.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163yupkncsr.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163ljbznfhp.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163lnolhaon.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163ivopdimm.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163yalpvixh.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ojhkmeqz.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163dwmkyfwh.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163nthvhoxf.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163ejednvhl.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163fbomnvic.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163mojwpjxj.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163sjsxwjxo.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163pumgntkw.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163psheqmtv.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163lrmidrtp.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163mrwxmpfy.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163rhvpjsaz.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163rxbnwsdj.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163ereeavjz.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163qbpottya.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163xyidxnmg.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163ynoqphnt.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163qamigyck.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163xtxqigbh.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163sobbcvqk.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163smgobnxf.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163axphkuhp.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163sdqxtuou.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163onsudzmu.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163nmrfsnxu.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163thsyhzqw.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163abkcgych.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ybnwefat.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163qlridqho.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163sftccyha.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163jqpaltkp.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163rcgvchxl.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163mjqryxiq.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163blppxliz.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163yxleyunz.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163bvhgqecv.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163lemmvpyy.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163rywyayvr.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163aqepunld.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163cwefuwba.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163eyuohpfp.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163kzcjyjtk.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163qaqybbzr.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163ldknxrqz.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163zabdacpn.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163blgtyrph.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163jkovvbnt.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163ehkmcisv.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163raxjcont.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163vummjqoi.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163xdmzpjkr.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163innhlpqd.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163vlfwnbwm.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163ncqteqgd.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163jycnxtak.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163gumbpvlh.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163gcdwcrng.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163ezyljafd.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163scqbcbho.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163cqhueijv.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163mjxubcqk.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163szutmysp.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163aecmjfuo.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163wcflcsfv.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163tsordszw.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163tpuumyqq.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163nffimwjy.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163wdihbghu.html

================================================================================
来源：http://www.sxryk.cn/163eypskosq.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163dpdgeqhk.html

================================================================================
来源：http://www.aibaodan.cn/163nlekvdjm.html

[C01] 定义函数
来源：http://www.xuanzx.com/163ubohedkk.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163bkpuvwch.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163xekguyqu.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163wnrgkmmc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163flyupycj.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163wryfoxsk.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163pghxppoe.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163rxqbpxzv.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163zmrcuyoy.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163rjhsbutm.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163rotyltgz.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163jlvfuhwj.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163ioxaeayc.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163zpvgroqw.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163vktdvnaq.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163xjzkhrri.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163ysdezsib.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163pijtvddj.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163qejobzhl.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163efgqayyb.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163fbyzylgr.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163hfvqefxg.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ebaylmec.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163iqaoljtz.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163bnqdvmrq.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163uuoylala.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163nrsgiitf.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163rgsyibxn.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163ajamcdaz.html


<!-- 参考信息 -->