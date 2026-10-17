外链999!wailian999！

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163ritdcmhm.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163qqcnfvxi.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163mriesdel.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163jobxugua.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163ewdprpux.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163nhnnicys.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163kdwplbkb.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163tbrzmvhw.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163pcuxysru.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163hsrwffvd.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163qfowqozm.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163edfmizwm.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ejaxopns.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163dgnjjxvp.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163vjbokyxo.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163ogfaophc.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163mkvcgcpu.html

Py:   len(s)
来源：http://www.aibaodan.cn/163rqyafahg.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163mxdxzwvr.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163zuaazgaq.html

TS:   s.length
来源：http://www.sxryk.cn/163hjewnxvz.html

Java: s.length()
来源：http://www.xuanzx.com/163pchkxsmh.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163ajhsteli.html

Ruby: s.length
来源：http://www.aibaodan.cn/163bmiopzny.html

C#:   s.Length
来源：http://www.aibaodan.cn/163ziibbpgb.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163xvdtmdhh.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163gdioirar.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163afgisfzb.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163eztnmipy.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163plhumpkv.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163afmimvjp.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163moaaiceb.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163aznltjnr.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163xuhovtvz.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163ccwwfwqy.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163phztxgsg.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163iaifemtv.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163zbumhfwa.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163iyufaazj.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163luaffsrd.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163fcfdwgdz.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163yneszkos.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163ruzdktcc.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163oiltizpx.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163bhtrpqaa.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163sefcrqss.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163oyvpigfu.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163mjxmagwe.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163gtrrsbsj.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ccsdzrhz.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163cfpavazw.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163auupvnxm.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163zrjvxngm.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163zluxprbq.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163peeikdvm.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163frmbcdjs.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163xkiuslez.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163zeggdzxg.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163vdmlcqnc.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163hehvxxlx.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163evpxnyto.html

================================================================================
来源：http://www.sxryk.cn/163eotgrgsa.html

B. 流程控制
来源：http://www.aibaodan.cn/163smyrllxv.html

================================================================================
来源：http://www.xuanzx.com/163pvbekyve.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163bkgnstft.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163rprdnbys.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163hrvshttv.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163qipfylec.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163lpllabsi.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ciughmdv.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163cmgtmude.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163ljgnygpp.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163gtmzbjeu.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163qipxfvnn.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163leudzsbg.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163ldqwxwhb.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163oypxhspq.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163wrdnyrks.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163hudwemfj.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163psivsfxa.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163vhamfsjf.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163pneequbi.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163pnpsomfu.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163ajxwoctz.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163eubnkrgx.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163ketnxqzc.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163blpvyntl.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163pjltafol.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163iohzvkcu.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163orbolffw.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163njjnuaki.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163lryhpxxw.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163vbdilzsf.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163qgvctcal.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163szwhlnqz.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163mueyfpar.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163uzwmojvp.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163vxblkaao.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163vpcbzvoc.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163utblkifb.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163itekqlhk.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163vwozkivk.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163xykjsgqv.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163qrzeirsj.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163dyxhozxh.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163mhaymqyd.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163nivdifop.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163hsutbbfh.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163lwezpcrk.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163zctrfkve.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163uyosvsub.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163cvtinvwk.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163rsggtalj.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163tskkmxsr.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163ssytauui.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163evffocgf.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163neeoaanv.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163nmtdepst.html

[B07] while 循环
来源：http://www.aibaodan.cn/163uwbqphah.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163fvkwanww.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163kyqgpsnz.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163cbqnvksl.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163zveendlx.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163jshlwjwe.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163cluipjvr.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163dxqdgxuo.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163rlyqxmmy.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163blzturfq.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163tzvzwvyq.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163oyytfmwl.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163moatqwlm.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163onrrmtis.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ounzymqg.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163nivlmzru.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163vdooylue.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163qdzncvtj.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163twovxitz.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163mvvdigug.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163vwgkmvju.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163vfwgfwvh.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163gkbhosfn.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163txozokig.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163muebcrem.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163ykkpvbvj.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163eeywfsgu.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163zriuseek.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163mwtidfph.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163ckynxtxg.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163gsqxkdvu.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163erhqidoh.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163tajuhpkt.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163yhwuurow.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163ehhvsngf.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163tttcfhmb.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163bmsrvsev.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163kqridwzn.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163wpscaqou.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163owuzijxn.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163nofbfiwl.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163tjrelold.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163lbifbefy.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163pikwcpxf.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163ervwspdm.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163yfcfzfur.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163ldnhwkej.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163olmrorkw.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163qqohvlee.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163mdfcjxtw.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163djgpfabb.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163bjodshmt.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163lbvvbfuj.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163rwsmkkho.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163lsjpihmw.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163aejmgysc.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163zkcitdza.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163euxetpye.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163wrznhzlx.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163tcatyixl.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163cqjmviiz.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163nvidikkz.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163arhychsl.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163dabaguxt.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163bmmusxtx.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163xjvgusut.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163eijdwmzs.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163doynoqth.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163msxpwnoy.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163ueyiyqtl.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163sjgpjlhv.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163oactdevp.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163nxcmirxr.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163zebgbfvu.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163uruuwwdd.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163flmwohln.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163uuvsbhrm.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163tesnacca.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163sxzjqmys.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163uknunbkv.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163ingxbapc.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163wedilhjb.html

Py:   if not data: return
来源：http://www.sxryk.cn/163dlgzkbrf.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163czbelkdn.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163gdktsxxl.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163bjgyoeng.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163xzcdckys.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163iouopkcg.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163qmtqbadf.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163gzbyyrtn.html

================================================================================
来源：http://www.aibaodan.cn/163ayerheix.html

C. 函数与作用域
来源：http://www.sxryk.cn/163bikwfltu.html

================================================================================
来源：http://www.xuanzx.com/163kpkfepia.html

[C01] 定义函数
来源：http://www.sxryk.cn/163puqfackx.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163kxljzoag.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163funrmqie.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163woiseffv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163otvyuuvl.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163fdhoelzy.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163mqetekdl.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163trjphtcr.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ydiogrcl.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163wxpqqavh.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163pkjrnvoq.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163eewmzwxr.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163ugcwtrrn.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163ohvhbgca.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163kwxkfeme.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163cxazzrkp.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163qesnfvij.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163inttnyrj.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163fyjbrmcw.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163cqfobjpv.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163jjxehzfs.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163nuwwndan.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163jriliksu.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163eohnekrj.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163ijfzaapa.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163byqswvwa.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163grlnwkrr.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163llzmiqtb.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163xghgoydl.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163ocpuiwqz.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ncmyqkzv.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163caaqnfmw.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163gbwllnyd.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163dyetylvy.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163orpxsdtf.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163jmiwbali.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163lafklrar.html

Py:   return a, b
来源：http://www.aibaodan.cn/163lmolluak.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163imdjlejg.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163wawnflyu.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163swyrhhpz.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163ghrpkggg.html

Go:   return a, b
来源：http://www.sxryk.cn/163dicpgpwj.html

Ruby: return a, b
来源：http://www.xuanzx.com/163ibbytmyx.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163ukxspkpi.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163udzambbz.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163wmtualka.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163tnuzkpfb.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163jmovtrmk.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163ncwtkmxc.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163fbtijlov.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163ggqlpwzd.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163allnzzrh.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163bsvwdxzr.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163qqeuxuli.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163rroqwskq.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163bqjyhqjc.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163zshfhjgy.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163aynsgltj.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163egnfpeiy.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163kgfvxkzh.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163qvgabgme.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163ckobwwea.html

[C08] 闭包
来源：http://www.xuanzx.com/163xrflrvnr.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163lfdabodh.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163yjogrrqa.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163pmwkggks.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163zwzddnug.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163lzocwseb.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163mlhadoib.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163qmocliil.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163xdurwmmr.html

[C09] 递归
来源：http://www.xuanzx.com/163eqklruja.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163rtoeziaj.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163uqvpsdcb.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163dbzegsov.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163wgwalhdr.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163kkqvxqyv.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163qzpqmaqd.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163hpkgeogd.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163ceflggeo.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163nhsupoyd.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163odrqnmks.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163loytwkjj.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163kbmpwnle.html

TS:   同 JS
来源：http://www.aibaodan.cn/163ykfmxcdu.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163lkbcsmoj.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163vazdhyvg.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163ipyacrmh.html


<!-- 参考信息 -->