外链999!wailian999！

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163hsdpnvom.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163liafohyf.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163okhwctce.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163lhlgtahy.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163njfjsnnj.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163sgmlztpc.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163uyfxkiut.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163jbmkanfg.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163rsnvrfzo.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163zethjlpn.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163aklkhkpo.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163mhzolpyf.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163snhgmltn.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163jjusalnb.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163bntcvtcb.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163xnfgoggq.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163behkexso.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163etnavovy.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163zpjbicch.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163fmjjilon.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163cfhfkmsa.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163rtfbvtmz.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163ayesxxri.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163ahqndwif.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163kiykpadc.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163zncnjgzn.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163rlxudraf.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163xoiaujbz.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163xviccwlk.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163dunikcog.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163adgabsky.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163vncrrodp.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163xibdymqc.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163ogknrjjx.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163onfivnwi.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163qeqqaawr.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163dkfphiby.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163owrbybgh.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163szozzfbn.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163wlcykfol.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163gxzgmbpi.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163kvkidtpl.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163wjwtjavg.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163yomxbvit.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163uqmkntja.html

Py:   len(s)
来源：http://www.aibaodan.cn/163dypnssyd.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163dgplorhf.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163dwbermlt.html

TS:   s.length
来源：http://www.sxryk.cn/163ilbsbtlq.html

Java: s.length()
来源：http://www.sxryk.cn/163wahliozx.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163porqmbyb.html

Ruby: s.length
来源：http://www.aibaodan.cn/163wguwnypv.html

C#:   s.Length
来源：http://www.xuanzx.com/163fyekyhtj.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163jeffkxsv.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163kvnsmbem.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163gshlzqpm.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163kddtiwyu.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163nmqaocoe.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163xboerpkz.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163synortnu.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163szuonojz.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163qkzaamwp.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163iaisktda.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163flpvbksr.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163bjqwdrfr.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163omswfycx.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163uvosirvl.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163zproqgxe.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163ulvssjff.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163aknrulqy.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163jjaqbzfz.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163swycedsf.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163qvhmhbaf.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163tdekqpql.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163mklfcdsu.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163vhxgijrl.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163rxfgjgeo.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163wfryzfpl.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163cprmylmu.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163hnblqknm.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163vjbcmkfs.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163hgqsejsb.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163cboiqdcu.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163modyxzds.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163iyesluyo.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163ilwgxyyb.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163lxicokcc.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163bhingdlu.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163vuhktosw.html

================================================================================
来源：http://www.xuanzx.com/163yxghhvqd.html

B. 流程控制
来源：http://www.xuanzx.com/163setzqwit.html

================================================================================
来源：http://www.aibaodan.cn/163gfdpizyf.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163lyqijkzw.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163saenyvev.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163lmrpfuhm.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163crjzcooe.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163vnnrvyph.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163vcopvpwc.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163touhnfdj.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163famrhucw.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163zffvlodb.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163ogzxbvsn.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163rlwrrtfe.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163locfrcin.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163eiwhlvzh.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163bzvetkbd.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163czodeose.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163gxqkoste.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163ftajqfva.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163bvtziqfc.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163hciaedvs.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163gajpathn.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163xmqwuefy.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163aachvaqf.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163mbwxqrzq.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163dxkvhgrr.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163njocopmb.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163hpqsjltp.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163wxstrjxj.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163lujhyfkj.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163vvygsjbp.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163ggihqhch.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ulaavdnj.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163xsduosfa.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163ngeuthpq.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163hyqzmfhl.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163dqkljgrr.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163nxaodpuj.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163etgctklg.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163regfcbeq.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163hwginekd.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163fhwgbiiz.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163lpdrwktl.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163jzrvrupp.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163qyqhckvj.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163bxetpapp.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163sjhkjxmt.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163wojhkmlh.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163zrlessxo.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163zgmbbilk.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163zdrgxkmr.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163tundnugi.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163kazparce.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163mxyrejwb.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163bjkvplnp.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163yrxxmqzw.html

[B07] while 循环
来源：http://www.xuanzx.com/163zozekujy.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163pkjxopnb.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163nvjyznwu.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163gbuuaifp.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163mdrwfkaa.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163erbpdjrg.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163ecoctbdi.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163utiufrif.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163gpoivmrg.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163wvbyamcm.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163bsgytawn.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163ghhkgayo.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163uqmepykg.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163gjaetzir.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163cmpjxcot.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163fxqmhytg.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163aatjpoqy.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ggxjsuqe.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163ocgqnjab.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163dyumffwk.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163vcmzzlof.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163cwuojsbc.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ssqewrps.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163xrvnuxjs.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163lyfxehax.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163qrfxmxxk.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163fpimsmgm.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163wijlzfsd.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163gbjahbfe.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163deonfctc.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163lpawpxpp.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163kuhelywt.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163cdeyzlbv.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163pwipuplz.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163sdghkvns.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163dfmefqva.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163aoobdoxr.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163wqajrtsp.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163vnpttynv.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163pcbwlxry.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163gctdbqul.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163lfkxpwir.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163ekgxqhpb.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163pgtrravf.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163baisiuna.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163qhncipee.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163iluuqner.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163zytxxnul.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163elovougu.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163gnskcjqe.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163panxdzce.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163mztilfie.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163yaqmdrjg.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163fuvrhwqu.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163qpzjqvqj.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163ykrgvpao.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163hjdhkapc.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163igbldxhj.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163inxsqsey.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163lgzxarfc.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163pckdvrqf.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163qkhdmvas.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163dltwniga.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163klcibabx.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163onqlzvwu.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163flaxhdje.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163xtjairjg.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163xtedvtjy.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163sgawvarc.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163aruhdzdp.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163bqpzrcpt.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163kjglxkcm.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163qgpkgkfh.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163jnbcfoks.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163rnjgbqia.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163oomavxso.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163uqquledm.html

Java: a && b || !c
来源：http://www.xuanzx.com/163xszxeuaw.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163qnrbwlvr.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163wllfrgpw.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163amgedqwx.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163vwmnqayy.html

Py:   if not data: return
来源：http://www.sxryk.cn/163aszvcgci.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163nkdrqnoi.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163kjzudkzd.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163qrkqxoww.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163ccjeiuee.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163zkrqrdxb.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163unclmcem.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163aeyjglkw.html

================================================================================
来源：http://www.xuanzx.com/163uyrkslvq.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163vmmhjvsk.html

================================================================================
来源：http://www.aibaodan.cn/163mnqbunqt.html

[C01] 定义函数
来源：http://www.sxryk.cn/163voygcfkt.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163ygduqkri.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163vuzkptpy.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163nwsbdakq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163zpeqkamb.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163sabgrhyb.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163dxttnckk.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163ghvgxomi.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163zuynwbqq.html

[C02] 默认参数
来源：http://www.sxryk.cn/163wwtuyxly.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163gktqalgg.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163hbeyyxbx.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163gfxdagew.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163glsbpegg.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163qwlxyril.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163xykxdoxu.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163wjtnftxz.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163auhjnnbz.html

[C03] 可变参数
来源：http://www.xuanzx.com/163hkanzfde.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163zunpsdsr.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163iwcsxfqm.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163xeofizvj.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163fdfubpld.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163biqvwvhc.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163gnaiyplz.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163mwitndfm.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163nholuyqe.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163dffnxmiw.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163eyfelikj.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163daebxlxw.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163zywvcfpv.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163lswltyir.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163jkiegndk.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163vkwbqyxt.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163kctrapqx.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ulcwmkhp.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163gkrihwuz.html

Py:   return a, b
来源：http://www.sxryk.cn/163hqtntjyj.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163wygzbsbu.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163lpbllmjl.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163lhfcixtk.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163mbwtosit.html

Go:   return a, b
来源：http://www.aibaodan.cn/163riftsqmw.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163bqfojskv.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163swguheor.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163numevsyy.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163gbtqihfr.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163zrilwikd.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163kovjptwd.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163llebvfvu.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163stluwuzb.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163dzxfmfcd.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163lgweevfl.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163dhntpwit.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163gzckhvxc.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163ovokabje.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163hvdisxhs.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163akrauduu.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163osgokosb.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163wmsrnigq.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163pyvmeccv.html


<!-- 参考信息 -->