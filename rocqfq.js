外链999!wailian999！

[A14] 注释写法
来源：http://www.sxryk.cn/163vqlcfetx.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163pamlwheb.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163ccaefovf.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163qbybtrks.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163vimhoqgk.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163pxtadvht.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163hafpyjlb.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163tjwzrqxe.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163bkcznoii.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163iffdpkbk.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163gtfdbwgg.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163iajmryug.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163tarhtbuc.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163onazmwzb.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163gagvrcgm.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163xpdlfndr.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163azrkahar.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163xxwtevqe.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163etaqknli.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163bjsiuqiv.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163afvvjatc.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163njetrvnd.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163vnwtitnk.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163blttrduq.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163wqpygerv.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163kpyhnydr.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163nwghyziv.html

[A17] 位运算
来源：http://www.sxryk.cn/163nreftseu.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163dpmttefu.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163menkvatt.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163vzzqgtkf.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163qpgcbfsh.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163uxyotgrd.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163jnefxbws.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163irhjfago.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163hqwtuqtt.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163wwdnpplj.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163rstlcwzs.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163evxxbzvc.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163tkzrnhdm.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163hzakqlly.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163thlvyjrs.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163imntzhhy.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163dzmulqdb.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163kabnahla.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163vgldctcp.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163iinvwres.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163bqynigzr.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163xpygrpib.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163sekdexqu.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163ieekieau.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163uzwyrmsm.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163tuubasvc.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163ccjmtdga.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163ulurztou.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163ykjmudat.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163ofdqzvxg.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163rvbmdems.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163bakeqlxk.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163nvscwznv.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163xlkolwmh.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163qmrqawum.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163ugkrgadx.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163cmmycapv.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163gjzrnxcu.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163yszrsbwv.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163zoswzjvz.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163aiaspdix.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163dtfhtrhr.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163dfdczqbc.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163jqmpwlhy.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163cuflefoi.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163cahbixyx.html

Py:   len(s)
来源：http://www.xuanzx.com/163uwnsbzcg.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163stmldmhk.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163fucpwhuq.html

TS:   s.length
来源：http://www.xuanzx.com/163oghpzmzg.html

Java: s.length()
来源：http://www.aibaodan.cn/163gaqpfiul.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163ehufqkor.html

Ruby: s.length
来源：http://www.sxryk.cn/163vsmswojd.html

C#:   s.Length
来源：http://www.sxryk.cn/163bvepzdyi.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163gspnllub.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163sqxbgkpg.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163dqacwbeg.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163qjlvbwws.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163xfgpkzkj.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163mxjxfqte.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163bjrfobak.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163lsdwtgjt.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163fpkyjvce.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163ijvutfsl.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163obpkpkgc.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163ggvldeil.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163iruttidi.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163baenzpdw.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163xwxgcknl.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163fvnvczsn.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163dnlqbwbu.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163cnnpbcex.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163htpsvdqf.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163csmhkedt.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163wyoohfap.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163yaxthigu.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163agautofs.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163gxwuhmdh.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163pucowivc.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163vutlipnn.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163xngrbals.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163dngisxbd.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163bfxmmhdg.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163ejjazaba.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163znrppvnd.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163xvnsbfwl.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163rulnoils.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163vlurqilw.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163kxhwbxtc.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163brfepwht.html

================================================================================
来源：http://www.sxryk.cn/163qdmqrarc.html

B. 流程控制
来源：http://www.aibaodan.cn/163bhytjtvk.html

================================================================================
来源：http://www.xuanzx.com/163xkxklwxx.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163vfmwselu.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163qkcqvsbt.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163kkfkaods.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163hovoaksn.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163dnxnrdob.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163jefgokmw.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163rulpsikw.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163pgpmtfnk.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163gntqduen.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163ddooqety.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163gvbhegzf.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163xdbklytt.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163jinzdhvx.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163kaqrwtpe.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163cvavozfj.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163ohnwriub.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163yeqoicgg.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163lcnaxufq.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163dsubmsko.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163ymeuziqb.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163smssvxei.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163ozqnukki.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163gihzjeyn.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163ymtiqslg.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163lvvyraxb.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163luabpbee.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163kdpzlaii.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163lbuarrrh.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163kpnmshkh.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163wjfhauau.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163cwfrekgo.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163iojpxlvb.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163aoymvohk.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163jdousnfz.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163ovqerelg.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163viybckwh.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163awkfivsv.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163ryvzdyuc.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163cwkmrwqf.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163cmeexutv.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163vwiqqqud.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163imxzrgks.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163ssxyoash.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163ffegtvne.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163oxktjbdz.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163vkxntity.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163jyirnpxt.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163tfgmzdmv.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163gkkaqsxk.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163gsfftxrj.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163spjunjwf.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163ugdvgwaj.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163qzeecsoz.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163kupypgux.html

[B07] while 循环
来源：http://www.aibaodan.cn/163pbydppas.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163hrivfdci.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163awcwgjpz.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163dwxnwrmh.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163yncflfqh.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ykppajgp.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163vyuyllme.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163efnrtiej.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ncomhrep.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163oaacgdpe.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163nfljnhrg.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163hubpvdiy.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163hhwtpfef.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163vvpplkmx.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163opdyckrz.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163isoacqld.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163qvodxash.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163tnscattu.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163dnsjgsoz.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163vbdzhdpf.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163avkdtdcq.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163rrgojzyz.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163etpbxsjp.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163cxxtzcpw.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163lxvqepes.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163wrxicqsq.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163elavdavd.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163tpeohyva.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163kolimiqn.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163eigwxvql.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163ajvykkzq.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163wwwcvzeb.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163gtwhlovw.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163pwxurfri.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163edxobfat.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163btjyytes.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163ptodhnes.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163hhbrqook.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163paftvlox.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163hkbbgdev.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163fpjiafom.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163ncbjsjfy.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163xcwccwmb.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163vrfokenw.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163esqzfbaf.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163qeszdxuz.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163blamcban.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163dxkpudpw.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ciyzpqfu.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163xadebnaw.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163rzmfjtrf.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163zpfqopcu.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163ukqlmxbb.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163uzlevbyw.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163cbcdfkrt.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163ktxgvscr.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163vjuhkoux.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163fgvpjgyb.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163enxtfrtw.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163jfrufpgi.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163qkxyklal.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163oqtcrckr.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163gljbdkgb.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163rwzmwyad.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163mxmyqsbr.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163qzscejiz.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163fjhqfsyw.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163cvixfeis.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163opyfmlxo.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163teliyfae.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163hvgzyohu.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163hgfcrhps.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163zcrpbwfp.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163xjoqamkx.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163yappzist.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163lqtzvmcp.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163qyaykdyl.html

Java: a && b || !c
来源：http://www.xuanzx.com/163bvgyjxdq.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163vhqvgsfz.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163lsrgnirf.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163xpxwmcub.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163qqoaekmj.html

Py:   if not data: return
来源：http://www.sxryk.cn/163hrghtukk.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163fyrjjqcp.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163kghohpsk.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163mazatpuh.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163knbdsouy.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163gmweglon.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163yiupqvmh.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163xviitggs.html

================================================================================
来源：http://www.sxryk.cn/163arxuvlvv.html

C. 函数与作用域
来源：http://www.sxryk.cn/163adqslspm.html

================================================================================
来源：http://www.sxryk.cn/163ypjvormo.html

[C01] 定义函数
来源：http://www.xuanzx.com/163itydifew.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163xilulhic.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163utzbkyxu.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163ryykttqs.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163xuraljbe.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ottaaemc.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163dcaacxqh.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163gyixumqb.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163elirfryd.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163wjvwdamg.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163wudhmdlv.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163dzpdariz.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163iaqzmjth.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163ooassrts.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163mehxsems.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163jorgatfv.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163tipfvlfl.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163ubuhknsy.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163onohdtfv.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163erxuxycr.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163ouxqznqz.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163wrurdvwo.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163rplsyryh.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163dnxvvllg.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163nutpxclb.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163hzyroxgi.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163hjhfpieu.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163htlgruvv.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163edjeeauk.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163etdaxjpm.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163wbbaqexr.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163xyxozczl.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163lmayrpvx.html


<!-- 参考信息 -->