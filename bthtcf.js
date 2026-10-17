外链999!wailian999！

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163cgoucpqj.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163bcekhwkp.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163ifxgwtuu.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163jlcwenku.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163vdgbeaic.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163chrejvkj.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163ovppajka.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163shepkydq.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163ukyqpxyv.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163tvvzszir.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163ciiymwyd.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163jjtanjzx.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163sapwiydv.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163naoryybm.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163lfagikxd.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163qmoaoirm.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163eizxfosy.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163kodtwufg.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163hdjoqpkp.html

[A17] 位运算
来源：http://www.aibaodan.cn/163brzrygao.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163aeempfdp.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163lwygfhua.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163lvxlyvzw.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163cbucdlht.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163emvhjtcd.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163dhkamywn.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163pidapjjg.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163hklfxhac.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163wuebssjx.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163uceycgmh.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163inqzjuoj.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163alnsqgdq.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163trlqirce.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163lycoupht.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163fezpbmcs.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163xjbdkufi.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163tralmfod.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163umrylwqx.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163gwdnxbfg.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163hivvxgpq.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163nhfitgkb.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163mpzotabo.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163esuvbyxq.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163qjxhhytk.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163vsgbznxj.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163vffoljpg.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163nrecmhin.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163wcmrohfw.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163jmysunuv.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163lzijgfye.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163nqvirdsa.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163npijefkh.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163tmngyyet.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163nyavwaxy.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163hyscesyt.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163ntrbikja.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163pzcccpsc.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163rrxauzrd.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163faeajrom.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163zwewmdke.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163sajruntu.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163exnnoxcc.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ikqlhqpe.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163ymoeslxc.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163rwvllofn.html

Py:   len(s)
来源：http://www.aibaodan.cn/163doodapkp.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163qnsmutky.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163cpdzwdwl.html

TS:   s.length
来源：http://www.sxryk.cn/163jxejsmhu.html

Java: s.length()
来源：http://www.sxryk.cn/163yqkdskom.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163icdhtxgm.html

Ruby: s.length
来源：http://www.sxryk.cn/163diyddmfv.html

C#:   s.Length
来源：http://www.aibaodan.cn/163izialkei.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163ximemiup.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163sgpxrjhh.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163jnlhepbx.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163aqrrrxde.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163osxjpxqt.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163hujilhqn.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163fbgwijpr.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163wezrbzny.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163xtwlwrtr.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163zhxhztgn.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163bviipakx.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163xvxtuwpt.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163vuypgohl.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163mextwcnq.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163ncszxffw.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163ggnivooi.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163dqorvupj.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163jecycepa.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163jnshngcj.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163qahlwipu.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163nefmupas.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163eedbsrae.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163zeccmavd.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163caccnxym.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163dkvqrftr.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163fgyffajo.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163fyhhhgmt.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163fehmmgwq.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163mevmfjvw.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163sbkawgwa.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163sgjzxrjk.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163zkmbvsze.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163qedqhlfb.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163ycmoutok.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163emwusbtk.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163okefzize.html

================================================================================
来源：http://www.xuanzx.com/163yqmzcudf.html

B. 流程控制
来源：http://www.sxryk.cn/163ktjdgenl.html

================================================================================
来源：http://www.sxryk.cn/163rrhejuqr.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163impyrmbt.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163osimzohd.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163atkrfrdw.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ntujtuev.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163uetloybn.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163fykclcnw.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163rpytlnmm.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163yzilxfxt.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163gsnaminc.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163tzubufoz.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163nbbagohp.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163ungpiosr.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163tpnhzacu.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163uqadmvay.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ieibpxtk.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163hhlfqnap.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163nwypwywb.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163cvrbmvrv.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163srpnbrny.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163qvrtiqvs.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163ugfxdlvt.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163qjzoiqyk.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163kfuujdkt.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163kebozpxu.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163fpaakftk.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163aybojjgd.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163golbstsr.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163czdqjaws.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163hcvngiuy.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163wxfolwkw.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163gxmiimof.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163lrvxewkp.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163qzvarxsf.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163svaoslol.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163ywvbzmzo.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163mhuryton.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163tbkudepa.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163qzwwzaym.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163vozeitjl.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163fgfmayic.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163lfgedfnx.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163agbbhnpb.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163hghumfvs.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163enjzyvkd.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163rorvjvug.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163qgqppvmg.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163gfvpyfti.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163uoczbbju.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163jexduqzq.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163uihcylky.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163goflinah.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163hfdlcxqs.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163qhodgxre.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163pnmxhlra.html

[B07] while 循环
来源：http://www.sxryk.cn/163ubiznopq.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163abtskigx.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163ajnrmghv.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163bbfuiwqk.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163hdpnxxpx.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163iqhzeofk.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163dcnugeeb.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163gmmaavyb.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163gflyewms.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163umbgwdqw.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163wxlrwswh.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163ktpkynth.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163frvlwtaj.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163pmlmnjom.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163wrjwpeim.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163jriphghd.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163thoolsfo.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163zwpnmhgt.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163czcnipdm.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163gciiwvou.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163ugqykuwr.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163fylgnhgw.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163uycrrkac.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163edfwrymo.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163cvzcudck.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163bcwokjka.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163vvnjohrz.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163lvwxbuic.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163ayouxlug.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163uakeqetm.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163tfxistic.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163rywmmoeu.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163okpeptox.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163prkjijxm.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163gaffgwpw.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163mxllnidn.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163vqcawzoc.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163lbyahbhk.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163idqkhimo.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163qchecdij.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163kbvoeabj.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163dtiepjfj.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163cbikjlqw.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163quheerjs.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163qsidgtpn.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163oslrerxv.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163hedybcmv.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163glzynapu.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163vgwyzwvg.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163vakhrgeh.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163nqskextv.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163ehgpnnlf.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163aouvmrse.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163vplrzomi.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163xxmdfumv.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163muuelopu.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163iosqfvft.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163pnxqgfqr.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163pxhtabmo.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163avlpzyso.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163yjturqqd.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163omsshqyx.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163puajsgbn.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163kgdczqvc.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163gryqivvv.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163skqlfykl.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ivdqzzds.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163egtjsrvh.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163raexbrvs.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163soixnlqx.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163yddbhgdt.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163pfwcympr.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163bbetyxev.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163jnzjihgi.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163tfysblpx.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163wpsyeczf.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163hwmjppsn.html

Java: a && b || !c
来源：http://www.xuanzx.com/163jbmeikwm.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163zlzjbgsu.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163mqrdppzb.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163zkcuscqu.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163vvfswhgq.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163qqdvhvfr.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163ljnvecdn.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163gmqnqpgy.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163nzxvyotv.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163sdhniifn.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163lcqbnhik.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163najudjux.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163oqarciwb.html

================================================================================
来源：http://www.xuanzx.com/163jmybeqpi.html

C. 函数与作用域
来源：http://www.sxryk.cn/163dapteoox.html

================================================================================
来源：http://www.aibaodan.cn/163wcgxtvpb.html

[C01] 定义函数
来源：http://www.sxryk.cn/163ajgqbjbs.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163wegfxxeo.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163bmcdfzhe.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163odciveze.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163akabpelk.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163rwxbmyla.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163rphbyjwv.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163asrpdfxd.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163eimepvyd.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163cgvckust.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163hfwmkrmb.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163wiwijfwn.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163pcornhwm.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163hnozizlb.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163fdkwvogc.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163mttwdpnv.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163wggszsug.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163xfzquplq.html

[C03] 可变参数
来源：http://www.xuanzx.com/163cyukebve.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163dijqtgxs.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163qataflbr.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163gdupubun.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163fpeiissf.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163brzlbwus.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163uqcgigok.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163skfiowym.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163szoysghd.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163mvhmvqju.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163yvtkvulx.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163hydxuvbm.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163sqolrnds.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163qapyueib.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163damgodec.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163iczyuyyz.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163uqjpoybi.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163fyhldpla.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163yronxkfg.html

Py:   return a, b
来源：http://www.sxryk.cn/163knaelink.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163qwepfwig.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163coyhlqty.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163lotswjkz.html


<!-- 参考信息 -->