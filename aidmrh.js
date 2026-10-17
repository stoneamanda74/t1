外链999!wailian999！

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163dbtbtowo.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163lxpangzv.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163hpwxfmve.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163txbwcgtm.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163tjqcllnf.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163xdktnqts.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163nepfhbvu.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163goahljos.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163mhcllrsy.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163fgolyxdv.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163ygcuoomv.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163zadqqdgh.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163buswxfzu.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163scmqvtgz.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163pnhxlutf.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163wurnlfrf.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163gkovoujz.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163pytujmhr.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163nzlxqcpp.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163pzjujbbe.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163jljqxlse.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163hgdldrzs.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163wzkpvfxm.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163lcoirrqv.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163hgppckjx.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163btqbuxvy.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163wjgzabnw.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163jcdazetx.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163mgvkqmxm.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163plsroxqw.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163wfprkhpa.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163klecblwa.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163gncvhyar.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163zfecyduo.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ilwelghi.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163ainlpjgd.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163hazjurey.html

Py:   len(s)
来源：http://www.sxryk.cn/163mxdedbsk.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163lbkeckcj.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163lbskssso.html

TS:   s.length
来源：http://www.sxryk.cn/163wuryxzip.html

Java: s.length()
来源：http://www.aibaodan.cn/163pyjrqhkj.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163buemgxpr.html

Ruby: s.length
来源：http://www.xuanzx.com/163qqjkilnk.html

C#:   s.Length
来源：http://www.sxryk.cn/163zthsmbms.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163umnlgbkc.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163mmelvlzu.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163fnpedauw.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163hexzeina.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163xxnjklku.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ddzdhsud.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163upledtnd.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163ujpwtsya.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163aptehevk.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163ywlhezjh.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163phlixfjk.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163lyurwyit.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163rxtawbbq.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163ezapdlqy.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163wihyxpjd.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163mrcjisom.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163fwokiwsu.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163mivlweos.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163vufepmpk.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163svtovkkk.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163iriwpinm.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163lxjfwyfr.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163sdtlzwko.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163jkkmdfjj.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163ornnxajj.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163lmpsgyjc.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ilkcpeki.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163gavpubyz.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163ysixtknw.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163mfiqjjhl.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163idexoekp.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163eolwnadc.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163psnqutbf.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163iqhpubnr.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163hxjudvsi.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163fdlunadx.html

================================================================================
来源：http://www.aibaodan.cn/163xqruhkxe.html

B. 流程控制
来源：http://www.aibaodan.cn/163kcebirco.html

================================================================================
来源：http://www.aibaodan.cn/163ilpnyowl.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163vhblygzo.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163upbhsgea.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163loeuscfb.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163bnsqzrys.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163vrpgadmd.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163vbewzaja.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163wimvwalo.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163hpacogyl.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ctynuqul.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163famhfzrv.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163thbhhras.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163ophuiuge.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163okfrgguh.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163tekgajat.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163duljkmsm.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163oljeupwh.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163onhefvhw.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163hckkhttm.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163lrdkulgc.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163voontzmf.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163pryeqfkx.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163haxqxwqq.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163pnfoizdx.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163zgpyqygd.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163bzsqfmlx.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163fezhshzr.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163nlpkwxxa.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163aiuudydv.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163qvojsvtw.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163ddzouyzc.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163kekqyrya.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163nfxdlnoq.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163emjcrgne.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163eqiutjck.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163bpbswteh.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163dvygzszf.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163uxgizypt.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163kbrixvhb.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163xntfuzmg.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163yjbhcqml.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163jjwtayip.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163imzidqcf.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163fyttcbkf.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163xopuxkbr.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163muilzcpb.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163kcerqdwx.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163nyaxtawn.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163zdthkyoe.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163kawalumw.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163wwyupgnv.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163pykrhuub.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163rvkoufjb.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163rboujxoh.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163auwdpdtd.html

[B07] while 循环
来源：http://www.aibaodan.cn/163vckkmzxb.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163inmyajki.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163yiuqpqzz.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163uvkkixsy.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163abbhtdyr.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163qsktvshy.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163klsvpzjz.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163wkxcmckv.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ariqcgyp.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163vaexvloj.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163ooepewia.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163kverjfhl.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163uxproptn.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163emfoxawf.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163bpugawig.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163ewwgiarl.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163hmljjtwa.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163juikuhvv.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163vsiiyfoz.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163ylkglxkl.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163iiuitywd.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163bkchgayc.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163iofgoifk.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ijlqmmsr.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163swfliwgg.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163dqehjgrn.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163kmrtszau.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163tsztgrdu.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163mwntenlo.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163uacomgbj.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163jndfpkhr.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163orcvflmn.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163wqobsbxc.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163sbtufzvz.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163hoqyiuft.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163gmqjcoyb.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163aryqlcvy.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163qxgqdwih.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163szmifixo.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163wmwsmyns.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163fshudtjp.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163usufdtsq.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163nabvxknb.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163yeneygbt.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163mxoykumm.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163qwbhubvd.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163dqgxuhrn.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163wybhhpan.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163nwqhofwn.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163hjvyhfek.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163cevfcvzv.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163kkqczsqj.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163koukjjhm.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163rzlxrpio.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163fkiwlpur.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163ezlijtta.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163yrxybfld.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163cfdjnbwf.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163qomyhznm.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163ygonmyyr.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163hkezsexm.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163rbumfyds.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163degicjce.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163qbiikzls.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163akfllczp.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163fylvvsiz.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163pimnjhkp.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163bxuyzhrr.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163qecqxvzv.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163hawtpkmv.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163ucdkicnw.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163atoxfprz.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163oocqsmon.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163jjxcupsy.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163firocdqc.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163ppkyloys.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163ootyovpy.html

Java: a && b || !c
来源：http://www.xuanzx.com/163zsdddcsr.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163exjinsgu.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163bwwblujh.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163cthdrfsc.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163wkvgpdou.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163oapicqef.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163xzckepla.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163itozwudh.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163zbgnsqnh.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163xxzqmxpo.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163odhdzorw.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163xazpoapw.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163ixwsbdrk.html

================================================================================
来源：http://www.aibaodan.cn/163mbewcgfk.html

C. 函数与作用域
来源：http://www.xuanzx.com/163suerxlvg.html

================================================================================
来源：http://www.sxryk.cn/163qycqazhl.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163vutdjvxj.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163tgqzzohc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ysawjvwh.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163duiwgajs.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163pwbngofr.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163oueuvvnj.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163zvxveaos.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163wgrymnig.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163gxezejqm.html

[C02] 默认参数
来源：http://www.xuanzx.com/163ktyijepj.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163wrkbwair.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163mkqqoimx.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163cupuynfd.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163vqngvozu.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163gfkchomw.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163nktjvfuu.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163ejqfolot.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163mszogecs.html

[C03] 可变参数
来源：http://www.xuanzx.com/163tsaarakm.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163xxmqsrvo.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163fnofwvql.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ykoxsftr.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163lqjpjdix.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163uwptzvww.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163bukjufrz.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163pqrzpeob.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163vpgrhkcr.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163fhebqqpn.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163cahlyncb.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163sgevvsyo.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163geyddcve.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163sayeevtt.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163twphpqcu.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163zkfxbfeg.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163parhykmp.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163gkamjsif.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163ugnqpwsx.html

Py:   return a, b
来源：http://www.aibaodan.cn/163wmvsddlv.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163xoyxtsxd.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163pcqaxrqh.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163cqugiuws.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163rzcdvcfv.html

Go:   return a, b
来源：http://www.sxryk.cn/163fslvcxun.html

Ruby: return a, b
来源：http://www.xuanzx.com/163weylcjuw.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163ttqnlmis.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163ifgdtjtj.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163famzkoiq.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163fdrxpkma.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163vaqxlqes.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163xfcatjtw.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163vhxujqya.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163uelefffx.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163yrmlbsts.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163uayapzet.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163hbfoqzxa.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163chtmyzsp.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163bsioemls.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163inhcmgft.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163qpdwqoha.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163ahsaocnf.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163fzivodwe.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163njvqdctr.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163cpfkdkoa.html

[C08] 闭包
来源：http://www.xuanzx.com/163zlrfumfm.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163bjxdsulg.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163qjfmxwce.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163pjksjtuo.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163uquubrnh.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163yxrzrhji.html


<!-- 参考信息 -->