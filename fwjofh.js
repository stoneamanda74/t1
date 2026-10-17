外链999!wailian999！

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163qdkvodzm.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163dupgrygf.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163snswsyij.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163buoagdxk.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163pgwjwopi.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163giluyfwa.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163ppbllklw.html

[A17] 位运算
来源：http://www.sxryk.cn/163ddwrrkxp.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163asfntsey.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163nyemyypw.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163vtxgzrwv.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163noctjtyb.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ljcljqyr.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163buqrppwa.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163lybcoqev.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163zhyyrcax.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163ccffiqzi.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163lgbsumfr.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163upwwpyqn.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163ebvwzaxw.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163nndupkcs.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163dxplbhoz.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163aaatcvcy.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163bgfndjcv.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163lewufwgb.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163infknjbc.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163hccigfqd.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163chwdksur.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163ownffivj.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163cyhzyykk.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163cnnlcdwh.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163inlwvxoh.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163hloortmi.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163opboxmql.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163kjhlwjjz.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163ullllaxt.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163qoyvhdxp.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163mefdqncq.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163qacsrixe.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163javpfwpt.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163exqomopp.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163evechdou.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163jcfdmxhv.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163mowvvtum.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163quidlzdq.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163rmnbvcar.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163uzzwkmfg.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163fifnpegn.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163pccneiyk.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163hheadlfg.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163tfszcafn.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163kwxtlonz.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163egoyvzyv.html

Py:   len(s)
来源：http://www.aibaodan.cn/163rfvybkgd.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163ryklmmqv.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163uirzcyah.html

TS:   s.length
来源：http://www.sxryk.cn/163erjvczrg.html

Java: s.length()
来源：http://www.xuanzx.com/163jpamczyy.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163etpotlhj.html

Ruby: s.length
来源：http://www.sxryk.cn/163mmptbfjw.html

C#:   s.Length
来源：http://www.sxryk.cn/163zszqnhyx.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163ajyykweu.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163lpollsiy.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163oqrdiljq.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163bnghgyuq.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163tglzemyn.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163pqqaxetm.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163fiockiyq.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163fxwzfjpc.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163gpqhkewu.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163rjlehizu.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163awjqvidv.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163aairvcvk.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163gatfmvqc.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163ukyqjqmx.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163vikxwhzi.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163kfsdwbph.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163pfzfujcr.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163kvlsybvs.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163bjjqaqqh.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163fdqkgkle.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163qjadqmyn.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163pnngabdk.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163kmxjmucs.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163unpzqhdr.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163gdwiyayp.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163xrrrbkwp.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163qjdtnklt.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163lhsbqryo.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163gxczlvha.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163osfqpqid.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163npowhteq.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163ctsesdfo.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163kqwqfogo.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163euqwwucj.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163ygbzyfbc.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163bxmzpuqm.html

================================================================================
来源：http://www.xuanzx.com/163fzsaukrs.html

B. 流程控制
来源：http://www.aibaodan.cn/163ukjnojtz.html

================================================================================
来源：http://www.aibaodan.cn/163bbxbamno.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163lycsszwq.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163unnwjnfl.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163xfahbezz.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163lhtkqrde.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163dxknasag.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163khgyjjsu.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163blqrxslm.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163zcfbhzxm.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163cdtgczww.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163dfghlxxe.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163inztygmn.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163zbdinvvc.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163hotodgdl.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163orhacqhw.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163mjuslbze.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163bmdguhpt.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163ttvicsal.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163kqhthkrl.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163doyuwswy.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163rgbqseos.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163jxyixdsd.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163uchotjkw.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163cdaqpvef.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163pebvojpb.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163gxrfewpc.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163frkidmdo.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163venplixh.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163okjcaaop.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163babknjyb.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163ydoflzns.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163gbchtqxo.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163wwtchxko.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163fojdscfn.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163bouywthf.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163jvgtjjcu.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163imaivffn.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163zzbzwgpi.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163kqpsziij.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163hydvaujd.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163xwonkfps.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163nututvig.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163cdrofpcu.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163dpohprdu.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163qllccqlj.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163kkjznjwb.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163tffoxpop.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163cuswgfat.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163wnriltee.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163bucjigta.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163nqhklbyb.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163zazjjmyd.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163mebxmllz.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163depjedds.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163wywxlwdv.html

[B07] while 循环
来源：http://www.aibaodan.cn/163xtrmkxsr.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163pscrssqz.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163tlwieerr.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ffuromyo.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163esincduv.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163okcikqhx.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163zlpezfda.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163iovsyokk.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163kwufxtxi.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163ywiqsmly.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163qhupgcmt.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163boahqtrq.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163vpmeuxvd.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163poanrouc.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163mpmrnpjf.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163paagaqmw.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163ehqadveo.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163jttuzbua.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163qsqxatns.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163jivabsxp.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163ugbnomse.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163yavhrgxm.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163suojpsjt.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163lpwjgdrn.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163gzmulwzy.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163cbyuzdxz.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163qdszbujf.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163ntwpctqw.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163pjcdblwi.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163pomwhjdb.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163rylpwxzg.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163eicjhbds.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163vhznvoxo.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163pzxfctmf.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163tmgwbigu.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163rcfejecv.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163xbarshur.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163qkmpiuwx.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163ywffasjb.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163kfgpmzpa.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ifpzntlx.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163twmgaqya.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163pbftzkjg.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163kxcdegln.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163krgcpeqp.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163mqblyoep.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163rkjlwiei.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163jzslvrpm.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163qnsugyrw.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163teewxnum.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163uhanclqy.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163nvktowxg.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163sgicopzt.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163lzivbjvi.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163fqozytmz.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163tozizupp.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163vxbnkeik.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163rbfhzfqz.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163xztiswgm.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163otxswejg.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163cvkuzere.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163xrokmizd.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163ugigbwgp.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163urokedxg.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163tesrfjzk.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163stcxdyir.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163vqlxbfph.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163eipdcsky.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163cwumgoqb.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163gzuexmel.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163agneqmtb.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163aelupyvr.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163yjsbtrrs.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163aggnbeny.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163gdbtgwqx.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163zlngyvdh.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163phncspak.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163sszhovyh.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163peagtvyr.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163hzjgmvtb.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163hwkwoffy.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163mkdsamgx.html

Py:   if not data: return
来源：http://www.sxryk.cn/163pmryesps.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163hqgzmwkh.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163dgjcnfow.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163vhtgzjxe.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163hhnigxmf.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163frtjpfsd.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163ekkajpqa.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163nbpxrhay.html

================================================================================
来源：http://www.sxryk.cn/163wekdkeht.html

C. 函数与作用域
来源：http://www.xuanzx.com/163miezbsrt.html

================================================================================
来源：http://www.xuanzx.com/163zjcxcrwo.html

[C01] 定义函数
来源：http://www.xuanzx.com/163nuhydlej.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163wmzwjili.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163uaitaxrs.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163manmwyst.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163dflgnsek.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163bhvzqgzj.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163vflikyuo.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163rviqhqus.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163mthxkjru.html

[C02] 默认参数
来源：http://www.sxryk.cn/163vbosjflo.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163nuttsnfq.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163iobzlhkf.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163tghfxquq.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163pmdrxpfy.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163mrqwccsa.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163ubopeoqg.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163awzslmtw.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163jqgmrjrs.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163lzezahbl.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163tfxidrwl.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163jzdiyesw.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163fsgedabg.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ldrfexad.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163rvjqomwo.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163klywfess.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163iwflaqhh.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163tozlklgu.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163rjzvyvwn.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163yamimzgv.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163kabvwbli.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163jgvcyzio.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163mrrqihze.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163naobcfoz.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163xdokwfgt.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163foapgirq.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163zsywvnaf.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163jekioafg.html

Py:   return a, b
来源：http://www.sxryk.cn/163xzkhqsql.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163pwtzoxag.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163wxdkufes.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163rzpirchm.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163whthcbvk.html

Go:   return a, b
来源：http://www.xuanzx.com/163wjnryowi.html

Ruby: return a, b
来源：http://www.xuanzx.com/163zoavevuf.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163lexinxko.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163utqtfuca.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163yiilkoyx.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163blnhhqmq.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163pqkcdado.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163clypxsce.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163ttdymkfa.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163fflnvmnr.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163atjkduch.html


<!-- 参考信息 -->