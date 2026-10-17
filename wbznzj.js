外链999!wailian999！

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163gcrulrgd.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163xitunzxq.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163hcqahcyg.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163ccxlugol.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163rljcevwl.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163uwimvaqx.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163mesaynso.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163sgrpxkzi.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163vdryokcf.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163kfevohtc.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163spfpbepp.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163psxabvjm.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163yrjnotga.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163tjntacav.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163znedkwjb.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163rrinfrkk.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163ejfwjmdx.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163qgwmucoz.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163qawbmqyr.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163xjwjkoca.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163tmspsdjc.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163hskhhprb.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163yctycdgk.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163nutnockf.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163sfmtscxy.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163gzempkbv.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163lvvbhotq.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163jfgvbgtt.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163zwtahzuh.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163fdgdiaus.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163rkfrmyog.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163egsocvmp.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163wejkishz.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163tmthbytw.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163kipnsxtn.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163fyktvslb.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163diuxrxcf.html

Py:   len(s)
来源：http://www.aibaodan.cn/163tpftfvuw.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163myfbpktk.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163rseafmqu.html

TS:   s.length
来源：http://www.sxryk.cn/163iiurytra.html

Java: s.length()
来源：http://www.sxryk.cn/163vvmbotwg.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163axjfnvks.html

Ruby: s.length
来源：http://www.xuanzx.com/163jvivvuvg.html

C#:   s.Length
来源：http://www.sxryk.cn/163ypsgaxpz.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163ypsspiam.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163ccuykytr.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163qdewwgvh.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163qmxzuiyv.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163wbiqhtoc.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163tcusfzif.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163ttlrognv.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163awxnmfsc.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163thfphzns.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163lxsxcmvh.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163flifpruh.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163ompxaxrm.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163huvevrwb.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163riddeqhl.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163ytyhjdwt.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163cqpofpkv.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163gdocvfwi.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163fwjwegle.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163sfsrfhlb.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163wotzqvup.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163eqcpcsgj.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163mluwvcsa.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163bkyuxjhl.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163dcltuinv.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163gsxchlee.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163ktgjabry.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163scxbvuxs.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163kbdeeshi.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163iljcxwsq.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163hdkazvii.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163qjcpkghu.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163lffcsafm.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163uxzxkbfh.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163iikbnyzn.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163mdunygma.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163vtiovaqp.html

================================================================================
来源：http://www.sxryk.cn/163chkvrbgm.html

B. 流程控制
来源：http://www.xuanzx.com/163agezvxaj.html

================================================================================
来源：http://www.xuanzx.com/163ridcstzi.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163ulqsenjl.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163dgapwnhv.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163ecqjqpqi.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163syrvyevl.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163iycqogme.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163borxqsnw.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163quqmcilz.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163ojgayjdm.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163zelzgqiu.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163ridliirc.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163xmdjbebi.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163jrpfmxdm.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163gjkiskfb.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163thtwjddw.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163rukgitct.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163loujhxco.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163evjpzzoy.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163zmzriqzb.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163glctloke.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163jddbjcfc.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163nwkjqfwn.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163lmdupsoe.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163ryhepbmd.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163ykbjjvkm.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163pdpvvnxf.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163udlsagef.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163ffaafmmo.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163isqyzgkt.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163bijebdkx.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163klymuyki.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163wpxwvkan.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163qktzsgoj.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163nqscgniy.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163ycccdjth.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163zqfotzsv.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163znbhfudi.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163nzjzuawe.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163xlpzdirz.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163qccfokok.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163xjhqwokr.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163acodvhzc.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163foqdodvr.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163epkviswa.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163wkzkqkjh.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163ajexjgei.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163wdenotbh.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163aqxmoakr.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163ouxofigo.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ukmkjbni.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163vtgizunf.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163ffhzjhwz.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163mzsedliq.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163oxohhqlu.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163jysvkzzw.html

[B07] while 循环
来源：http://www.sxryk.cn/163bteghlzz.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163ewwwuwai.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163wdhvhuss.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163tsyfzcyi.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163qimzlapb.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163cyaklddz.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163xsdmxxwx.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163evtrcpon.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163zbxqqnom.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163jrfagjem.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163qhtkydwx.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163nqjhldnz.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163kivmioxd.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163pspwgrhh.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163pwdafdfr.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163xhleibwf.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163ciuvwlnn.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163cfvuctkc.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163jkrxlmhx.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163feyscedn.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163aubvfskj.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163pkdbwqya.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163mwooiyde.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163vcxxuqgu.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163cdrreuix.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163qjnokjhh.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163deypmgel.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163ienglshi.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163vbifmftp.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163qbhbpmiu.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163lvbjqwsp.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163amtwkpka.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163rptueetw.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163bbgypotn.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163hkzmqhya.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163qhmhqaby.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163xcqrjftp.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163ehlhtotg.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163pyeqhyqf.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163lxoumiqk.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163pdxscznq.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163qugidtor.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163nlcaadkx.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163jkwlmzov.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163syxpauit.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163udbeolsl.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163ocejqxan.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163jmvixkxj.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163fsqfgenl.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zaqrxgtc.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163dygqhqqb.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163iixdkfuf.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163gdxangcb.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163uolrlonf.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163kdobqtyc.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163zapugmtz.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163wzfghndw.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163czfetmcp.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163wsywsvwb.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163xuycgens.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163itgtxpgl.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163drngdycs.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163klynvfzv.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163myabzasf.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163brvqsepy.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163pjzhjtrh.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163lvdrtjbf.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163lizumcnw.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163guwzqgck.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163kqydqzbf.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163mdzdzqrc.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163xptssjoe.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163onvyznol.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163xamueoyn.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163ppljgeyz.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163xhybbggq.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163atgrjvkn.html

Java: a && b || !c
来源：http://www.sxryk.cn/163ibbyoxwf.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163vwcrdhke.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163vjehhqrj.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163rrzzttcj.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163pdmfvtey.html

Py:   if not data: return
来源：http://www.sxryk.cn/163pbynmouz.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163yomxdsze.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163nitsqors.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163nzftvjif.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163jdmrbfjb.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163krttbyoa.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163gntgwmke.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163ntfgckzv.html

================================================================================
来源：http://www.xuanzx.com/163kbiuxofv.html

C. 函数与作用域
来源：http://www.xuanzx.com/163xvazvhwx.html

================================================================================
来源：http://www.aibaodan.cn/163tgxvrigu.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163tilpbjdx.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163vdudckvt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163slzijgcg.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163jijopinc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163remuqjww.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163nlyfaftz.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163ndnspisp.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163lghgmynv.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163wclnkmby.html

[C02] 默认参数
来源：http://www.xuanzx.com/163jyjolukf.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163xcudjvni.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163nlefnosw.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163cvneqdeu.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163mfkotyob.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163solpbghj.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163blzmsbvf.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163idkdxkgi.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163mbxbtnfk.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163lwlosbgb.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163lyeisqwh.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163tnijfuaq.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163qaogyapf.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163jhzbguki.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163vxdprxuo.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163oeccrzmq.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163otgrsrvc.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163zqtjlutb.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163jwzcruik.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163irepmkpf.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163dmywcszc.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163epjefhpg.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163eeblstvt.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163vzerqyjx.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163bhgoydqh.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ubypfndx.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163cdaejtkv.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163bowhehdn.html

Py:   return a, b
来源：http://www.aibaodan.cn/163jsaqqjgb.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163uaanwoue.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163zzawvsov.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163uzkuvvmv.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163xqxpjbzw.html

Go:   return a, b
来源：http://www.aibaodan.cn/163xglumgus.html

Ruby: return a, b
来源：http://www.xuanzx.com/163hpabidaf.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163lfpbufqx.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163lwrroeni.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163rjeszokr.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163prdqesex.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163dialwequ.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163zajhlqtk.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163ycyodfib.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163kgaauziw.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163gierestf.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163ceomvzll.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163eftdvsny.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163egjhdmhb.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163swimpuoh.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163muonvwmm.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163qutxwklv.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163yyikntqo.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163xadddokt.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163eqfgxosn.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163cvagcjax.html

[C08] 闭包
来源：http://www.sxryk.cn/163yuzxioki.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163aaxpoqbz.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163defntejp.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163oaemynbz.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163vomefaar.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163ihunhzwy.html


<!-- 参考信息 -->