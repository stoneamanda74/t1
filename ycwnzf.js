外链999!wailian999！

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163ynnoqobh.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163mokldkok.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163oeiminlw.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163tcjjsgpe.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163ttgskeyk.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163fwxqkpku.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163yufjdhdb.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163yobfefjm.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163psbcojwo.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163kgngnsvb.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163qiwvufvh.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163goflcfvs.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163osjcfkfh.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163uukbodes.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163smmhukvg.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163zvyqtqva.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163puudkhcy.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163dqxjajqo.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163ioitpkqz.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163lofxixmu.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163jgrmlykj.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163pptdxqgu.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163dwxchzkf.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163ohmnnsil.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163urxalebf.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163knbgeyvf.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163vmcuximx.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163wbdfacna.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163sgtqoais.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163enffcthv.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163umqqobup.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163mhrnhclj.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163rhayociv.html

Py:   len(s)
来源：http://www.xuanzx.com/163raqdgbar.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163xkhrweyo.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163lhepsjkn.html

TS:   s.length
来源：http://www.xuanzx.com/163iuvrilxm.html

Java: s.length()
来源：http://www.aibaodan.cn/163jzvnchgc.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163mhwzdaqr.html

Ruby: s.length
来源：http://www.xuanzx.com/163flojpktd.html

C#:   s.Length
来源：http://www.aibaodan.cn/163irhdngkq.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163fttbnwzl.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163eaocybdv.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163lyrjzblz.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163dysjmcyo.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163tgledfhj.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163mferusnb.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163nokjrqcb.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163slrcflku.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163ptowwfvd.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163gtehcbue.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163etwjlipd.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163jahauhsl.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163xjuctnub.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163mybltkdj.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163dxxvicry.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163jixekvvm.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163dcjydgyu.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163ukwbzdba.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163igifhizp.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163ezqecxup.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163lcpwkdlb.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163ufnberiw.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163slwjwmpx.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163xlgrigcr.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163gtjvmuyt.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163baqcgmzo.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163udindczg.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163jobwspxa.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163gsidmfyu.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163grjednrf.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163ionsharf.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163hvnulxyz.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163unwboinz.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163utotsshb.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163zpqghqbe.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163rfjgugyi.html

================================================================================
来源：http://www.aibaodan.cn/163yqkrmixa.html

B. 流程控制
来源：http://www.aibaodan.cn/163lapqbnxx.html

================================================================================
来源：http://www.sxryk.cn/163couaocev.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163nlbytgtf.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163ymmxwqvn.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163uwkedoky.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163tsffpkju.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163tdofdbvt.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163vowjmupt.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163klpbzout.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163iqqplvyb.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163vfbmrwwl.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163vlsybski.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163gutoeirt.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163aavzfkbp.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ivfwsjhf.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163wdgbiish.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163obpzetej.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163hdgbfzhs.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163gxodqxkf.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163gouwnojl.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163etgqznhu.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163shukrnwy.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163ocowqfys.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163nscgwrdh.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163hpdsbull.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163bbqvpcgd.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163gdtolouv.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163xwgbfilj.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163nxpbnbma.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163zumgpkeh.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163pecemrum.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163gqnvglrp.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163jjoepaqk.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163lwawsbhd.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163cgkdmgfd.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163ybogiccd.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163bdibftdh.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163nciwntln.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163wrapprfw.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163kotpbatk.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163bpqughha.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163tglhitsh.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163nnukabae.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163fwskolhy.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163wlzzxbvo.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163dsymytuf.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163sgmqgphi.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163mwfcgdwo.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163xeweszof.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163rytebvlh.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163iybmuurz.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163gnugoanu.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163uvxibffd.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163zxbgfhsi.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163vshwhrpv.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163zfthjias.html

[B07] while 循环
来源：http://www.xuanzx.com/163ejoutxzm.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163ccvapxag.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163zgumdbih.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163bsprgwuv.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163wsknnypx.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163kvncillb.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163vkmakaed.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163ranosffr.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163mcitueyt.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163fkuruizg.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163ykcumyec.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163mazwurrh.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163nxlfxhwt.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163hzdzseit.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163aflpnwmf.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163cqiupiei.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163qnwwtpjk.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163rgxabvph.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163htdojecp.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163migvjljl.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163gsihekmn.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163pkozbzvx.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163xcpvrzoz.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163mjwvugxs.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163arrpypnj.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163rzratple.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163dyqoezwy.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163stfianly.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163gvfkwjqt.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163xsdlfhbl.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163iplqgyrj.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163lfhlzxmp.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163kkbwtypv.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163rmwwebxa.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163pdylexdp.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163jyxzrrlo.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163nimvznum.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163tjcotypk.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163oqfdrqvi.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163iytsxwsl.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163qtglqcxj.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163fsishnzd.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163obeaqyhy.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163bnkavbdi.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163lcucjrst.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163svgbmgve.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163ncdlcown.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163aoanddjb.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163lttlsugs.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163gyqvafdp.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163uoubwnfb.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163ioitipqs.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163bfsrldmh.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163tiihjsad.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163osdpfsys.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163pjcyxrfj.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163xtqhzdxz.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163duqkbzmz.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163fxpwnhew.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163kkuddxip.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163gbdlnhmu.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163wuuhwuzx.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163yarbcqvc.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163fgzyzqju.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163dieuzlma.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163pebptwfw.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163fruiczab.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163rughipuw.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163aeeacqgn.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163khwykxdn.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163neujtumr.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163yrzfmlzq.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163kwnisqbv.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163esmqqzoh.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163jxkgbosh.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163hfoexblu.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163atbnqfya.html

Java: a && b || !c
来源：http://www.xuanzx.com/163yybnedkz.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163hnoyjhkk.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163qetdmfxr.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163hvnljnlv.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163cqwfsisk.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163sqgbmiut.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163vxvsoctg.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163sfhspifg.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163noqhbioj.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163mifdcmlf.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163puxcewwz.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163wvuozffq.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163vfumrpnh.html

================================================================================
来源：http://www.sxryk.cn/163xzjiuqrm.html

C. 函数与作用域
来源：http://www.xuanzx.com/163rlrdwyuu.html

================================================================================
来源：http://www.sxryk.cn/163tqdcunpd.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163rzpwkpjq.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163bejpuhne.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163papdefpx.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163smwvdpns.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ljujlxev.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163neqlvlrx.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163ljbszqwp.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163ucgpbrvx.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163hnrgvqsy.html

[C02] 默认参数
来源：http://www.xuanzx.com/163sbkdjvbf.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163oueeizqm.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163qgiyjzfm.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163qisgfhue.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163jpostuar.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163xlnltphm.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163ecqzzfft.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163lkaofjfs.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163aosfprjk.html

[C03] 可变参数
来源：http://www.xuanzx.com/163tpdeakza.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163iyemtkwt.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163sydiefes.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163lorawqfu.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163xwwvrfbd.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163csryqagr.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163pjarqndn.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163giwlqpbz.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163mrvpcfgv.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163uypoheri.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163pvkuznzb.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163taaiadaw.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163xkqbwifd.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163ncyewirm.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163vslqksss.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163ihageyet.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163orutbxsd.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163pvilixzm.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163euqgebkn.html

Py:   return a, b
来源：http://www.sxryk.cn/163rfvltwle.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163yrtzwuef.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163offzkjdu.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163vefszatx.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163fqifvmzp.html

Go:   return a, b
来源：http://www.sxryk.cn/163bfbzwxtx.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163abctcunj.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163sxfxwnci.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163brgljsjb.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163evmxbjbj.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163xabhayot.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163dlfawedz.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163xdystjce.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163plhzqosp.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163rcjcdlif.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163oikdqcpi.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163ryybziid.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163akjrupdi.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163lnhsqpyy.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163iraybrkz.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163qefqfpvc.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163ciheaemx.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163dxphwgry.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163fbczgcpc.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163mgfxfxjv.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163wxiezuxr.html

[C08] 闭包
来源：http://www.sxryk.cn/163xqccweyo.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163ipjodrrf.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163irhfidol.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163pekqahfd.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163jkuxchoe.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163lfgkrdop.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163uxprrkjz.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163pfrgvomq.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163evpdyykh.html

[C09] 递归
来源：http://www.xuanzx.com/163yzzrwier.html


<!-- 参考信息 -->