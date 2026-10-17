外链999!wailian999！

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163apxfavfw.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163ywlmasgt.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163fxkyidiz.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163ueyifcxd.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163fevyalls.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163hsjcxrcn.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163dubdipao.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163njawfurh.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163lwsifcpz.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163emhvaivx.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163tcvhmwij.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163bsmxevqv.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163gowfffnd.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163uwermwbl.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163skdvocny.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163uilqkwdg.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163iespymsz.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ojajlxuh.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163golovjbm.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163jjhxpedw.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163cqhycbwc.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163rauymbvr.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163surxgouw.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163lzsljawh.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163benevfme.html

Py:   len(s)
来源：http://www.xuanzx.com/163cqwshyvk.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163kizwdzfv.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163bawepqom.html

TS:   s.length
来源：http://www.xuanzx.com/163dqmnlklo.html

Java: s.length()
来源：http://www.xuanzx.com/163voepavfj.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163cffxowng.html

Ruby: s.length
来源：http://www.xuanzx.com/163qfhtbxkg.html

C#:   s.Length
来源：http://www.aibaodan.cn/163fpixztuc.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163pewdnsrz.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163tseldgcm.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163ncnlrguv.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163zrnjvajb.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163dzdhzivi.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ngipakqg.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163ptfozpgi.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163izucpsqu.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163jegpmlfy.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163pjlbmjqc.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163uavyivxx.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163mdjfztky.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163ogrcvioo.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163rdxnexte.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163ubvamsur.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163ojrzhqwx.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163tyrthvin.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163saasncsm.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163nrkthjor.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163epwvvurf.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163zfssqhxe.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163xkrckdvu.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163rgfvpeix.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163abthosgr.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163zminunez.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163hbejogsq.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163yniymdvj.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163pwioalus.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163cbdbwavj.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163xezksrix.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163vhqqzkeb.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163pdovvqoh.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163aapuydvu.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163vtqayilv.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163awvroiov.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163jzncpunj.html

================================================================================
来源：http://www.sxryk.cn/163sxzawvuw.html

B. 流程控制
来源：http://www.aibaodan.cn/163abweamkd.html

================================================================================
来源：http://www.sxryk.cn/163ykojjpad.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163rivipraf.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163vptwvcxd.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163nkggrgtu.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163jmnriult.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163qhshckbf.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163epoelkdz.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163pfpnpdcr.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163obdltdbb.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163jlpmrdqy.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163xvlytmgo.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163bthcrfyu.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163guftqrjv.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ixkstfoc.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163nfhoiemx.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163jusfvyiu.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163dahvmrod.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163kdwkeuxo.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163chvfrdil.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163qyomacsg.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163soyvwhhp.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163pgeywgsa.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163oycemdih.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163bejrbmdz.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163hxthdhlt.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163zrmfkfsr.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163avajvbhg.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163iqowdqeh.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163opwatcay.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163rmotvude.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163xdkqxjgh.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163rfdyhqxg.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163ncdbmpcj.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163ymwkynsp.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163lbjqzkgp.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163dvlhhfip.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163rawfoker.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163wtgdwyhi.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163fkjcwmok.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163vyvloewn.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163ukgxtdxi.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163cynslszk.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163ylegwgvb.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163rxmznolq.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163kiskmnhg.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163nagdanof.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163hfmjpvud.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163gdhnzbvj.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163dzqcmztu.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163vnfekfvk.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163rlyihmjy.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163fvcfifqb.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163mlwdqcri.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163apifsvvd.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163bluaxnxb.html

[B07] while 循环
来源：http://www.xuanzx.com/163jfrqrntr.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163pntjfmqq.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163augzthqo.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163cymzmpxs.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ikuysojk.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163zqwavbch.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163tumwucll.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163wpphxyov.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163jzvgfren.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163undwrxei.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163accljhde.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163ygxjgwqp.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163obnsrfve.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163pzuzggxw.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163aryhdhpc.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163phmkypko.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163glimnybc.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ryzisnov.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163znsditpi.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163unmacbox.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163zkzpkstq.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163hjctndzo.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163cvfftgqb.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163lyzdoeuj.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163nfihxiay.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163tfdjgjfm.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163hmqhbcdi.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163ruzbgixu.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163gtwfcgsm.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163ryjrjlus.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163wfsljqkd.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163hombropw.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163zqwmyvti.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163yjzsatyf.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163ynlmrinj.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163hvhwfysb.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163ryqebaxu.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163zqrtcphn.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163tuzxytvz.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163kghtyvkf.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163imutaruw.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163ufksbodl.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163drbnnngy.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163wbpxecdn.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163pvqpjmkj.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163ycxuxxsw.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163avjccmiu.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163rplcnrhw.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163reaqhxut.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163slmmpbsf.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163vygjkhfo.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163zucttmxj.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163ktdlhgqa.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163drnzdaei.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163xtovpgfs.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163vxrpfdoe.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163uvuuivgo.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163wwklulgq.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163heulivtp.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163fkkgkgfe.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163huupipfq.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163xwqpyfut.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163zbjoxalw.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163kufpvgft.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163amxchaew.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163brozztrq.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163caqzadys.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163avuphjbk.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163tlqddyue.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163thwgvawl.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163ccewtqzx.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163owmhrwyn.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163mkccuqfq.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163wckzexee.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163uhdittap.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163fesyclfa.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163ficwztji.html

Java: a && b || !c
来源：http://www.xuanzx.com/163jpqiprzq.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163zirswiys.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163toyqvrcj.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163rzpzpxyh.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163ulxiicqo.html

Py:   if not data: return
来源：http://www.xuanzx.com/163gmrbfnoi.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163ckeepoqx.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163tghjdsig.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163uelvamgy.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163iybdmvkr.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163yecgtkta.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163mllkvoph.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163pktmqufi.html

================================================================================
来源：http://www.sxryk.cn/163pqdterwm.html

C. 函数与作用域
来源：http://www.sxryk.cn/163utzwyzuc.html

================================================================================
来源：http://www.sxryk.cn/163hmbybgxq.html

[C01] 定义函数
来源：http://www.sxryk.cn/163kjdrkeqo.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163oluvrmmi.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163cegunoqu.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163odbsjfwm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163dlqatept.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163aurqtykk.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163stbspede.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163sdwzcqjb.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163qesixqlg.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163ewibosap.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163unixjoiq.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163kughnyoa.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163inixmueo.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163zfqozldk.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163xoqolqge.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163xkqbrcqz.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163pnyhxxng.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163lvjypvum.html

[C03] 可变参数
来源：http://www.sxryk.cn/163iimeljna.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163ptxaomck.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163noqyzmxp.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163myjxeslb.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163pptpynpd.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163uzoyokpt.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163wconssvn.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163pwybbvim.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163touypsyi.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163mptspmoz.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163tvuxsqdh.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163mtscmopb.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163vfbjlfei.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163fylywblq.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163gtjafzxx.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163tqqxyecw.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ypdnxjou.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163rsoswvyd.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163lruguohb.html

Py:   return a, b
来源：http://www.sxryk.cn/163lnertfrs.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163jzrmmast.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163fecttfoz.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163trzgxtoz.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163xgzxgnef.html

Go:   return a, b
来源：http://www.sxryk.cn/163uzndoznz.html

Ruby: return a, b
来源：http://www.sxryk.cn/163emunmrxu.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163vztwdbrk.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163rydpdzzx.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163kkzuille.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163jxogdqpt.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163btxvrinj.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163umayewva.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163vqzizvty.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163ektquteo.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163kvledpqp.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163tfwvowqf.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163sqcbnfmu.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163snydihzq.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163zufhbinm.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163mtrvjcjz.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163qvrgadio.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163vdvzpvqi.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163ivwmdhto.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163hcsfdqkn.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163nerirlix.html

[C08] 闭包
来源：http://www.aibaodan.cn/163msesektc.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163ndpnyrtj.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163rkwyrgfn.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163qgtehqfh.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163yzlhiabd.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163xpznhpiw.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163fcxsdovq.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163pveufosd.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ixtkgxol.html

[C09] 递归
来源：http://www.xuanzx.com/163eanigrck.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163yfyoqkbi.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163dnessiij.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163hrdnoxch.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163vbvzrnob.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163fzsycsys.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163eexqmnor.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163lwayvovn.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163vpfuodnv.html


<!-- 参考信息 -->