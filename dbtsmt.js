外链999!wailian999！

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163ylokfvzx.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163vgcamktr.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163jmxcimtg.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163krvcmdyv.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163aseprxuo.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163xzdiaeuf.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163lbnqgnll.html

[A17] 位运算
来源：http://www.aibaodan.cn/163ifmrepzv.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163mqzqqlxs.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163xrqtrsuf.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163tfczqcxg.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163twuqhxoo.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163nuzqfmff.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163hqvmzvtn.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163qztpurux.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163jmyvckzm.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163kdibfaxi.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163mflxtvwe.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163rihgkznp.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163aspcamzw.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163enythdte.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163dzhecfah.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163jrzrirdm.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163txheeqws.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163atqarwxl.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163mytlunbf.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163skfwojya.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163weovxric.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163xzjuqhqd.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163rmlkluot.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163fzwwgeyi.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163daearsba.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163uyzafxpk.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163ixrfmgfa.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163ahvujgrf.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163sspejpab.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163peomewwy.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163usqmjary.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163idzxwolw.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163bmtyxerv.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163xbmhqzpu.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163ffirkbjw.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163npqtnhfs.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163mqacgwrd.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163qushewux.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163tzojhfpl.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163cjadejum.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163ugzdator.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163zplkbzrp.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163wmvmdwku.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163bvtukldz.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163kxvhqtam.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163ozgvinrb.html

Py:   len(s)
来源：http://www.sxryk.cn/163rxxpzrpj.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163xodoeera.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163hhktaubk.html

TS:   s.length
来源：http://www.sxryk.cn/163ocrbryws.html

Java: s.length()
来源：http://www.aibaodan.cn/163wskvccac.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163rttxalfr.html

Ruby: s.length
来源：http://www.aibaodan.cn/163brnhdhxg.html

C#:   s.Length
来源：http://www.aibaodan.cn/163gtrfhpze.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163ljcnbquo.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163fzsipbey.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163nytgvekb.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163rhstpyow.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163zcqohubm.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163yzfxeifh.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163xbjwzmxm.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163xwvxdgok.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163nysfxiue.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163rcqtwhhd.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163gveknepa.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163gwnazlzp.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163vfzshmsq.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163jshbhpzi.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163hwxhzgfh.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163zatpcgbl.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163rultryas.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163xiapclaw.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163lvhwersa.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163yoyliijl.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163zqplprij.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163onzcycoq.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163bvoqvjco.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163bzpixciq.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163hgmhohvq.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163tzlsikjd.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163ftjwloob.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163ryzrxygd.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163jrgdotgn.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163eqtnobjw.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163anamwzla.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163mmfknidi.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163tiwwzfea.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163hnlgvqjq.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163dypfhwyh.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163jqtgeqqn.html

================================================================================
来源：http://www.aibaodan.cn/163baegmxgn.html

B. 流程控制
来源：http://www.aibaodan.cn/163sscyvwew.html

================================================================================
来源：http://www.xuanzx.com/163hewgfiqz.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163slyctnlw.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163dlmegkou.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163wbuywhqt.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163dfcwsyjx.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163nvkbxalq.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163gjlqjoin.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163yfftdusz.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163ymlbixti.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163nmryeyaj.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163znjiszcb.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163tneovlfi.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163pitjudzw.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163lzowtekx.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163leknlkkr.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163aqehjzfy.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163ndwwxbjy.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163jconosjo.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ygzanbhg.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163kbbhezqm.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163bftimrzh.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163zblmavbo.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163ljvtcvpl.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163mjniyjid.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163hcvvreve.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163gxgabeub.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163qnbdqwsi.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163toirzsov.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163eimuepgq.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163vchkvwgw.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163mjalovxn.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163ubizromi.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163xttxdwla.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163ihsjgadw.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163fqhbidzx.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163tcynnneu.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163jzbakhgc.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163oxtqmlie.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163lzynzjiu.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163xsxsdmfo.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163upfvlrfn.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ylcvnbna.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163rjojaozy.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163qwqltodm.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163hwibrwhq.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163sqjdbiqi.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163wpdhkzhh.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163glifskex.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163wsxqftry.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163vpkjccwc.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163vpjdwimg.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163tqfytfon.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163vuvxhluz.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163ibuvoebb.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163mvxxfneo.html

[B07] while 循环
来源：http://www.sxryk.cn/163qrjyjnot.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163jkrbkukb.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163bsjffmcf.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163etyyaqcy.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163oexftmil.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163jojjabur.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163gbkpevsm.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163rwkanqll.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163auwxxboe.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163nidhzhgl.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163tnjwmmaw.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163pgdjxwfn.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ezrqbdpe.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163qxlhuetm.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163kvawixvv.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163gytqkeuk.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163gdunbzsc.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163exjqvmgr.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163xmgwkqpm.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163wqpserxg.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163pgaujnru.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ivbeiihb.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163mryuaikd.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163rtemjypl.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163pbxudnal.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163erudidwz.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163jebyfrxa.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163ftamemcu.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163jqzsnirt.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163ekihlmda.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163ggegzvjq.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163grnaartn.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163zcstqrjj.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163hibvgbxg.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163ezgtuzmb.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163qowcyypm.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163issqumfk.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163jkpafimd.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163rhljneci.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163plwzffvi.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163ubkcjrhl.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163ojhihxqb.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163hcrvqyrw.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163lycohcaz.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163igiodxia.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163ywhwdfxh.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163doqratdp.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163jomsfoyu.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163dtwwmjvl.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163xxsxnalo.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163bhuemukt.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163czsmfcaq.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163eauapchj.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163ipuonuty.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163nxnxkray.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163purlbgnn.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163axgomxys.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163twgeumuk.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163gsdmzvii.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163ucbjvfee.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163jijcbame.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163rcczalgg.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163rizanlmy.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163ivgkkpxc.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163ytgtnksk.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163bbkbbtix.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163qrcjwkrk.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163omksgoix.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163emeerfnq.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163mzcymuau.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163nxfyoeiu.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163dfeheqvl.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163mtqkqkmz.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163hplwxqhi.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163xxbhbiii.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163iwsipcgc.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163jjltdaqj.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163buzwstvh.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163zcfnvgzy.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163hzqozpru.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163lslohsgi.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163qcbmpzrf.html

Py:   if not data: return
来源：http://www.sxryk.cn/163skzyhtkz.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163kmhhcqpn.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163amjdpcvg.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163mzxuilqa.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163prjmqfqg.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163hnrpgvlo.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163tyxgibnf.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163evzbcldb.html

================================================================================
来源：http://www.aibaodan.cn/163edkhfscs.html

C. 函数与作用域
来源：http://www.sxryk.cn/163zswesawz.html

================================================================================
来源：http://www.sxryk.cn/163pabqbheo.html

[C01] 定义函数
来源：http://www.sxryk.cn/163dvtggrfs.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163bkjkxkyd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163hpkvjjjj.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163azbvgars.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163haqsczom.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163wjrmqohm.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163hkkvkzsf.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163xcskaihb.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163jnzqngax.html

[C02] 默认参数
来源：http://www.xuanzx.com/163hdwcenms.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163kuzblznq.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163uvnhwagc.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163srmmeubs.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163zujowwyo.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163afzelapm.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163lhkancwo.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163gbabfveo.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163ndnqzwyx.html

[C03] 可变参数
来源：http://www.sxryk.cn/163mezvzfbi.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163albrmsqy.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163zjqfgwhz.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163tpvejmfg.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ezkpgmdy.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163mgwgpkzc.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163yinrlfsh.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163xrqwizmk.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163ybrwfebq.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163ekakgbby.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163onxuskcl.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163kyvouumj.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163mvntctsz.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163uqtxsipb.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163qvhadbuw.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163faewupsx.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ingtdfws.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163dmhehfjg.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163wkzkkdbf.html

Py:   return a, b
来源：http://www.aibaodan.cn/163qmhwnewc.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163lfvqimdi.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163yvpwhxmm.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163fgrppcbw.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163xmhadpil.html

Go:   return a, b
来源：http://www.xuanzx.com/163pndodnha.html

Ruby: return a, b
来源：http://www.xuanzx.com/163thkzgwny.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163naedfegh.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163uygdwszc.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163earcvcdv.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163ydxkhzfj.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163sfdfnnpf.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163pjjycdyw.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163kccspmvv.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163kwedrluv.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163gwzefuij.html


<!-- 参考信息 -->