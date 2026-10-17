外链999!wailian999！

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163flzgqyra.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163jnjqfvoi.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163unzxnqdc.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163lsnjsdfi.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163bttjrmre.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163vojltxid.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163hjptdolt.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163kjimfsqt.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163owauqkda.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163tmcesywz.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163fnbusrtm.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163pnmcwqzq.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163tcdehoxj.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163nqrjdxxg.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163qepcyeik.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163lseiqwth.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163hhkapxqu.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163ckfeiupc.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163hhvwnfsl.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163vornihba.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163nbukrlis.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163ylrtpwma.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163mwcejwko.html

[A17] 位运算
来源：http://www.aibaodan.cn/163lddlupgw.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163aqkxbkaa.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163tcjxgdtx.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163micpptkp.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163lccyxpei.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163mztcnxeq.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ltjuxiem.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ndlhxics.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163fqqymury.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163wlnwgtpu.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163qouxmkly.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163gwgwddtf.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163wfooqwsz.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163yhpbalhz.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163rgtbbfbl.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163tszkycez.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163ynsvapdt.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163zokisnfe.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163rdmzgmkz.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163zgsktrbv.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163ghvhjtyn.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163hccwqhyy.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163cervomar.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163zhlhbfth.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163vedvyrjh.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163imlsoych.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163jjnlfzoa.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163ndgxpgvh.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163exnntdog.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163bcyclmzr.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163ehmuzzmq.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163kqmidhma.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163zckfvrmz.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163ovhyyegn.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163vumzzrnd.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163ldmwhlod.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163vnlvtftq.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163hbuffnva.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163jxsatmag.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163wjnwcefj.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163xjzmdaex.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163eohbyzbx.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163xgouaica.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ewbncwnh.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163bhkdpyba.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163atfqmjqt.html

Py:   len(s)
来源：http://www.aibaodan.cn/163ljvlpcie.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163jrmdyohs.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163mojzonbc.html

TS:   s.length
来源：http://www.xuanzx.com/163cytothzd.html

Java: s.length()
来源：http://www.xuanzx.com/163goleakbc.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163bsuofpmf.html

Ruby: s.length
来源：http://www.sxryk.cn/163kfyhnmfj.html

C#:   s.Length
来源：http://www.xuanzx.com/163plwwdees.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163uippzvyh.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163gwmirkme.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163zkwmsqci.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ebozesuo.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163maiphopk.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163rdqiycwt.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163xupqvcvi.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163apgozrpg.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163zczsmyou.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163rhbslkps.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163nozvqsgh.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163dlsibnmv.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163qpmlaoyl.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163enrgbvtq.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163xbhvpwga.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163jjeiyqdh.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163xrgfxsyw.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163wxihnqli.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163rhdwcrsn.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163jyqsnvmx.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163mpskkwgh.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163jxjrqmnk.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163vtjvdrsd.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163zkqvwwmy.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163rnhwsskg.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163tvdkglrr.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163whfnndbk.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163gjbxnyld.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163pglzvqrj.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163qsbaszhg.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163irmfcinl.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163oxmqojjr.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163cvsfzaff.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163gsuujqtj.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163wqecwthq.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163xcezgedm.html

================================================================================
来源：http://www.xuanzx.com/163ialrnphe.html

B. 流程控制
来源：http://www.xuanzx.com/163jhbbsazf.html

================================================================================
来源：http://www.xuanzx.com/163yvegmsud.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163lkwxfgka.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163srmlevdl.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163itwnrfim.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163uxxatirz.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163eggrqrac.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163fxbccqix.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163phmrzkud.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163vimdtpyl.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163qjeofvkb.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163bztaampt.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163dmljmxtg.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163aojcpiuf.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ydrikmeu.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163hlvekygg.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163rgjdalvw.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163kboecumg.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163shrjeikf.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ysohbzjz.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163gfyyuenm.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163bbibwmhk.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163osvazrqp.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163itbqlmvj.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163xlenwwsb.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163helbqwpj.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163vjuvpvge.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163kacbepmw.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163pjrjvivn.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163zdqyjzvx.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163ogaarzdp.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163mivvqdux.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163dfjobrti.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163jlnkniiy.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163wikqbrqb.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163cwmtbcoc.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163bcpibhvy.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163oqngvuhy.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163wnmfwflw.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163fbzwthlf.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163xbosctjl.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163bccrzmbi.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163grgidnlx.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163vekqjxdj.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163ugnazmfs.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163ypwvvuks.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163ftcecvba.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163bghrrwmc.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163nietihqg.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163jaahlldu.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ygxrnniz.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163rybkwubo.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163yghiqrcb.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163sarkxand.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163pccensyk.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163dxaiihjb.html

[B07] while 循环
来源：http://www.aibaodan.cn/163gynvfvsu.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163kabfieyl.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163qzkhrrrq.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163yiwkhgzz.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163kxwnzahi.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163fiyoqqcv.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163fitcmynx.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163qsulyjfb.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163epodptst.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163qjzohvgy.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163rzqlajei.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163bhbbgbzu.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163irlkrbrs.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163duzrehwh.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163sjadhqdf.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163hxheikcu.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163vmsytpyb.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ewusflmn.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163fnyjumnw.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163lhmtizaq.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163lvnvssaz.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163nitzvsvz.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163igwevofc.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163mypoaalq.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163fedgwefg.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163ttikzawq.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163strjovto.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163alpexwda.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163rbqqhcvg.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163kplnnpjq.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163mwnyywzf.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163acctnvgf.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163uiyaxzey.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163quxmxgpr.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163pmmrqphn.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163cbvsuhvm.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163szmuajda.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163ulsfqnov.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163bscfobqn.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163yfgzybcl.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163yxaloptb.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163fjncvtau.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163hvbtoimf.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163bjmmtdee.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163pyeitqiz.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163xzvbjwwp.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163dcklanqg.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163uvhejupi.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163gvvrixua.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163shztuezj.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163qptopvwe.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163nmzbnafh.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163gfnsquye.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163tktjmsng.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163anmlzkme.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163phwdvnlm.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163zritoekg.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163rhpjipot.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163frkjmglf.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163avtsqoxj.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163kozsnkfr.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163ymywcnpg.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163rizcjnhs.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163jzzketzb.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163ddbhqtem.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163hqrfebrf.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163hnezpgwm.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163isoskuci.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163twwupzov.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163grkwzmct.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163setxzmes.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163irmxconh.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163gbvjuekq.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163niarefls.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163idvvnlgf.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163nfvbmvbt.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163aocuugqo.html

Java: a && b || !c
来源：http://www.sxryk.cn/163clkgasus.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163prqfqnrc.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163omlopklt.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163fsxhpbul.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163ebqmsxsb.html

Py:   if not data: return
来源：http://www.sxryk.cn/163tdotkfgk.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163kajcyoek.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163muzpwubp.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163qsjyurzo.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163loevatkf.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163niymfhcg.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163oudekvrx.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163ntcvqcef.html

================================================================================
来源：http://www.sxryk.cn/163wrdonfgb.html

C. 函数与作用域
来源：http://www.sxryk.cn/163rgciqyfl.html

================================================================================
来源：http://www.xuanzx.com/163sfwrwdrx.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163elruoama.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163cgpglvdj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163pxczrulw.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163gufalkzi.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163wpeeezva.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163wpggylel.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163qktdnggh.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163dduodkob.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163hpxhwher.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163ayrjmgnc.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163rfkxhimz.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163anwsrork.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163ktdxqcaq.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163djplqicz.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163oxmsirch.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163szonumxc.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163eqycnfrl.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163amhvlzof.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163mxgwtbya.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163qzqfazao.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163xxscqhsd.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163stjkxjxo.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163hkszyihk.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163ldrzrbqb.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163pqfbfgnv.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163rodlfdfq.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163tsrkfpcy.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163vxaluard.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163wunlxjju.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163hstyhwap.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163uutpcxpp.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163qyhjansu.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163jyrjfzzg.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163dllokhnn.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163qzowbxww.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163mgqzieyx.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163orejnums.html


<!-- 参考信息 -->