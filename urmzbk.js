外链999!wailian999！

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163xgfcxjzn.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163wrdbtncs.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163xwqgpkwf.html

[A17] 位运算
来源：http://www.sxryk.cn/163itsnrigs.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163drmcbipi.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163krxyejvy.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163eqhyiyuw.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163zkwhuqmr.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163qirvfxqi.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163qqxlewvs.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163vxczirnm.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163tumbohzi.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163qnqakntn.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163ukgprsmo.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163pgmcejsg.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163ezwiwtoc.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163faffvtgp.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163utvjjbet.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163ignrbfkr.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163rhahhpwn.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163pftfobfq.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163feqzwoow.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163erpeynfw.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163vrxlbngs.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163kdwxmycv.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163jmvbhbls.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163wyqlrhos.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163korbxygb.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163clvjefry.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163uyhtgukv.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163ounxcnqi.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163rqlbvmcb.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163qkppdbnq.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163yxqnpjvi.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163zghpodbf.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163giyxmgcx.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163gijiieqt.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163yqpcxidr.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163imfjjxug.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163ixpcpoac.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163fhpezhgf.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163smamkpwi.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163bxebnjne.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163idssiede.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163osdjmdob.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ivrbzmuj.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163bszdarff.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163ysmyavct.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163srxxjbfo.html

Py:   len(s)
来源：http://www.sxryk.cn/163gmwgzhcu.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163luiwjgkv.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163mismhrye.html

TS:   s.length
来源：http://www.sxryk.cn/163oskxjewp.html

Java: s.length()
来源：http://www.xuanzx.com/163mskerkcn.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163wjetghhr.html

Ruby: s.length
来源：http://www.aibaodan.cn/163crpcguot.html

C#:   s.Length
来源：http://www.aibaodan.cn/163foueziph.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163atpvqxdn.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163xhcnrrig.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163vdptezzz.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163gefdnbye.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163utrgqgoe.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163dzesfbmu.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163vxnlmbgn.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163tdaboppn.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163urnxdfep.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163zvtmjdse.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163pmgotkhv.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163wvhvvqsi.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163wukvtwce.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163sclmhyhl.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163emmktpzz.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163czhasqsi.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163xgiiamms.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163goxdmzyb.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163dzsrmdye.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163qjnpaayg.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163wmtjwpap.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163zonerapl.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163mxytohio.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163dtheggur.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163jhblgdyf.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163srvvqcrc.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163ldnafwjd.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163bymqcfhj.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163leqgadhu.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163vkwflumo.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163eratrdyt.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163gqwaxmky.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163phcdomdn.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163vtehvzgu.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163hublrgpe.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163jntzrbds.html

================================================================================
来源：http://www.aibaodan.cn/163vjhorzoi.html

B. 流程控制
来源：http://www.aibaodan.cn/163qmndfawi.html

================================================================================
来源：http://www.aibaodan.cn/163zemgokfk.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163wycipcwn.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163hqphoyop.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163kowuupgx.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163aniqeebl.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163myfvhgvj.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163yztxckix.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163lpceweyu.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163xdfzifhx.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163hssijglh.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163cbcjjpjn.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163ulqfkucy.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163pmlzzzpy.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163cfzchjqo.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163efzahepx.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163nlkzeyim.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163vfewiork.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163hdrfkgoj.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163sdrjuwdd.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163jpodxapg.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163gppmqavn.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163idytuwkp.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163narmqzzy.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163aurohzxc.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163djveoexj.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163fhltftze.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163fyhgmaff.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163hazlkiul.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163vekjnctj.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163socrehqw.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163xtxldqyy.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163ugdteuyd.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163cnhfywde.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163nlqelnyl.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163lyrwdyvr.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163lowbxpug.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163ithhlztg.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163zlqmnceo.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163fayiqlvr.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163druycjvg.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163dkkxqdon.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163qnjgoywa.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163jxhayduh.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163lwtimtyp.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163fhhwrmgd.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163vmkswvnd.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163puzltdvb.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163ybcjslie.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163ybmfpxyi.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ldrhekhz.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163nvgsbpdj.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163kdxmkiek.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163murofraq.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163hnnjmjjc.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163etcpxgoa.html

[B07] while 循环
来源：http://www.xuanzx.com/163ccrhqfyf.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163lqlglyje.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163txysrnnr.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ansuaivf.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ykjixqae.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163gjbbetcz.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163qbxdffnb.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163gbggkrel.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163qmcuukff.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163vmobvang.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163wqwhospr.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163adjfnpsa.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163bjuphvab.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163mzlswgop.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163mzlddvja.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163sdciasmy.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163potrxpnx.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163upgnzimy.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163dxaeympi.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163jdljvezh.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163mpzsjqcl.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163rqvvpuxt.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163htwjzzwy.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163tzgtjlfd.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163thcnhijd.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163uywgyxvt.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ldzhmsjl.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163pmsbeigc.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163utojalyv.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163qcuavoas.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163afudkuuq.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163pvrhtexb.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163tdcqxykt.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163qqvvckcb.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163kyzoxhhr.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163jcqjsoni.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163xhqdqsqt.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163wilaopot.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163nitgcmtt.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163dgpwhrlq.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163kjonwlzf.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163agsumkkb.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163ibsedeoa.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163xwwlgdyk.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163fkbdvwzs.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163wrmmmpun.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163iurlpgqp.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163bvogkulv.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163dxurgirn.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163bgegygnd.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163hzuxwnbt.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163hkhhompp.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163xkbzifke.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163gkiqrxgz.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163vycnpiyv.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163fjiqmyno.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163mdjuelgm.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163brjsgudg.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163mydnruin.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163vrekablp.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163sgvbgfbo.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163qcoyoftm.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163ijbowrfy.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163cwoppvwu.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163quysfgaw.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163qimqiedl.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163zpdivovw.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ocguuffp.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163glbgmzxo.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163tnmtynac.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163lpiaqsgb.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163tvauyciy.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163sacraecm.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163agnniodd.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163hpgotmhb.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163jhgybhtz.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163tjrrahst.html

Java: a && b || !c
来源：http://www.sxryk.cn/163hhrkfdfj.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163gdnetdre.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163kqjurhhy.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163wddsycmz.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163frydtnfj.html

Py:   if not data: return
来源：http://www.sxryk.cn/163ekvqvcsx.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163ksmcufzp.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163dgbtgehn.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163rsxybevx.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163yewgwjlu.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163nhvifqvf.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163rtfhptwk.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163ltjfzfih.html

================================================================================
来源：http://www.aibaodan.cn/163anjnrkxd.html

C. 函数与作用域
来源：http://www.xuanzx.com/163bftkbunu.html

================================================================================
来源：http://www.aibaodan.cn/163fzrutzkp.html

[C01] 定义函数
来源：http://www.sxryk.cn/163uwphgzgm.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163fqfypahf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163jcyaulfa.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163jlggggns.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163towgmnpb.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163svoyleab.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163nsfhjjme.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163tbrzmcar.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163wuegtsxk.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163clecelce.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163cpvigher.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163ncjuizoy.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163sjjzhmpk.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163tplvnpzy.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163maswcgpc.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163blccyexx.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163bhcrkgrm.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163wrutvbkd.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163zbwdukkj.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163akmxysjp.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163fasmllmn.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163bihztbvo.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163sheuogzi.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163fipdiwsu.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163kxveisol.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163ceygtlyo.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163ootwzgek.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163wdhikryr.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163vngmutcm.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163dytyckkr.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163wgwpsttz.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163zgwzaugt.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163eqbfhmmy.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163xctyznwh.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163gorlbksl.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163wrjuadez.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163uxgsghyn.html

Py:   return a, b
来源：http://www.aibaodan.cn/163gxialxbz.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163rfbllhke.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163ixhqfzbt.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163nwwzacxa.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163wgleklzr.html

Go:   return a, b
来源：http://www.xuanzx.com/163snnofefh.html

Ruby: return a, b
来源：http://www.sxryk.cn/163valahijc.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163eztjzehg.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163xlzubwyn.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163qnoridqv.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163pygyjbdu.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163vsmpuygo.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163siziiylp.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163ehzegqed.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163beuvmips.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163wnkmeqjj.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163pvloinna.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163edzzorxj.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163zpwxmmhq.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163ntcjkdsh.html


<!-- 参考信息 -->