外链999!wailian999！

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163agvskyqf.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163qdsahedp.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163ksjljtqw.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163nsezfzvy.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163vtfgvnsi.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163mjsizckh.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163iostskdg.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163npnjrzwi.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163fmyybkvu.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163ijihurul.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163lbbefdwn.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163sjxqcpjr.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163trsytcda.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163umonzhpd.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163oihisxks.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163ahgmrxsu.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163flwadtau.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163qnhlzcbz.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163kvuvvzei.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163mvydweqt.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163mprxnnkw.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163bebhrrnf.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163prlglnpc.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163choirzmf.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163rymzmyuw.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163jlkltpbq.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163xdpxhmro.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163wsdnxmaz.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163orhoempu.html

================================================================================
来源：http://www.sxryk.cn/163jtrwudph.html

B. 流程控制
来源：http://www.xuanzx.com/163uhgawicw.html

================================================================================
来源：http://www.sxryk.cn/163vxmjucvu.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163zxxczern.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163fnrenzwx.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163bnbhqgop.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163fpwydyte.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163aljxpwmp.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163parybjxo.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163xylypeyl.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163udwsouap.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ysdpiqcj.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163heuysunk.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163faciduba.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163eaanihch.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163mijgwqup.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163golqizhp.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163zncsauvy.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163hvyphxoz.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163nqeywkzc.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163tkxngzhq.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163ptqdybpf.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163wrunqxwg.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163univwolt.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163dkuyjcan.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163dvrjlwwj.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163tgeuoqko.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163adjuszkr.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163hothclrt.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163mxhhbdpk.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163unrbllcd.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163gypnpupt.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163krfycpyc.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163htkxpxgb.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163zzuwqvcv.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163ixkoahns.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163ybrztkrp.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163ahcernuc.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163lwvxtzzr.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163dqrdqfan.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163rldivpnc.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163aqbbmkdk.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163enufolig.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163eiwppkfg.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163skxjclcs.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163odypicmr.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163ciobjvhb.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163csriivow.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163ygtftoqb.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163llchnbfe.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163tttznxtu.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163dwvmmvbb.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163lyivkqbm.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163jwwzlhsd.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163arcntzgu.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163zydhygcu.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163kqtcqxfz.html

[B07] while 循环
来源：http://www.xuanzx.com/163vtpdmzqp.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163vlawgtuu.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163iargvszj.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163dkzyybjb.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163awrskudj.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163zrwlwvfz.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163fwmikapm.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163foejwchr.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163fmafmwyf.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163eeghvxtu.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163ecskofqj.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163jqfwitus.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163hyamtrfs.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163mxpnmbpy.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163jqrldtwo.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163odcnpbyp.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163rgbgckxy.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163omcyboul.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163vukarfon.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163gmgitvzz.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163hddbcuad.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163zqfuoiuz.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163sktvclte.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163btoebnif.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163hghvcuss.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163swguczon.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163hsylxxik.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163sfvjgjoo.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163vzjtrvuc.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163fmfwkeve.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163jarfpudj.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163zxjpfvck.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163gvwsoalv.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163ednngiwh.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163pjhvzsrx.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163esnxkscr.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163eryunxoy.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163pzbdysar.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163awjeeznw.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163nxdivsik.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163dtwxboxc.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163qivxopns.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163zzdsuyur.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163bcualllc.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163ymrahkyx.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163sutoncjf.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163cekmfecr.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163hjujfzka.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163mvdqygat.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163kqftwett.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163pvpzmovt.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163oulbhngr.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163uzxdgqgp.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163dkfakxdk.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163qprfdfxm.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163qyzbmdma.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163kjpvslsy.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163qzgntyfj.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163vgrlydie.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163qkniowxs.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163hbakghui.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163haxhplsz.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163ydcqzkze.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163evqoatoq.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163aezxeeyd.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163gwgxmiyi.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ymgldrce.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163nahfzwhm.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163fqsfqtqu.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163ldcimwzp.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163beoctwhp.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163ygfzeoir.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163nbvodzqe.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163gwyegyrx.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163pljpfilh.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163laakingi.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163hcbmrbtb.html

Java: a && b || !c
来源：http://www.xuanzx.com/163crxebmsd.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163okariira.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163cebeywgl.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163ikgwztcs.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163fodxtrhr.html

Py:   if not data: return
来源：http://www.xuanzx.com/163imhgracu.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163nwkrxgle.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163bifnxbyy.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163obvqjkgv.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163eghymqrq.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163hionufch.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163azmzuuzp.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163emaltdvz.html

================================================================================
来源：http://www.xuanzx.com/163cxdopdxh.html

C. 函数与作用域
来源：http://www.xuanzx.com/163egrqedhf.html

================================================================================
来源：http://www.sxryk.cn/163upegmyno.html

[C01] 定义函数
来源：http://www.sxryk.cn/163qhzuiswx.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163pxvdpdba.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163xtfqdadi.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163gbsoilzq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163dxxurxqk.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163avjjpqjp.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163vimdibkl.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163kwkgghxi.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163whyncvbb.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163vxzgserd.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163ztoiakng.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163mdrhjrmt.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163txjdofhp.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163sbzszqoa.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163klqhaboh.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163ruazcopf.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163cdiuoilo.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163uvisqvby.html

[C03] 可变参数
来源：http://www.xuanzx.com/163hxjsawny.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163ttymcfhw.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163wpjyrwht.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163kllrszza.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163bmcrrqif.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163aqzmthxw.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163amtbabih.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163czdrjkbo.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163nmmnwhnh.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163ctbyzwra.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163rxbdhiga.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163evonvuzu.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ipbcejip.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163bxxdyzel.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163tzizsgbh.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163pvsiriie.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163pooaaajk.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ztzeitvh.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163gxsepjdq.html

Py:   return a, b
来源：http://www.aibaodan.cn/163clmhdfdf.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163zyqkhwtk.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163zhxzbyjg.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163fvdzbklj.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163fgduptdq.html

Go:   return a, b
来源：http://www.xuanzx.com/163kefvpdyq.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163xyysuzud.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163nazzvavq.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163sayadvma.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163zrswktxk.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163ehcrbxmr.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163prxteozd.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163vqurkgte.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163msdwravx.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163rcddhdbo.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163imvfmrqi.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163dgxrdkya.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163vgdzaztv.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163wtnhehqg.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163zuxriylj.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163pjatfuao.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163pfpxtwmy.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163zfpvvbej.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163dkhxlrfw.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163eybthoha.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163taeginwq.html

[C08] 闭包
来源：http://www.aibaodan.cn/163ixgiglgg.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163gjnfjamv.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163cvehtine.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163htcdqcbk.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ffkuktam.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163fmutafqq.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163jnnwiugx.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163kshokagp.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163oenynwbv.html

[C09] 递归
来源：http://www.xuanzx.com/163oaroiwfu.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163aefuqhpr.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163jxyibamc.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ymbmkthe.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163tzzzotso.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163khlbquim.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163zbqkgdtd.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163exutewdg.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163xwisgooy.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163qmswzqme.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163ggcpizuk.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163umgofcbd.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163abymlevb.html

TS:   同 JS
来源：http://www.sxryk.cn/163uofhdwio.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163cocravqd.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163anrbyvqy.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163reutjmuu.html

C#:   块级作用域
来源：http://www.xuanzx.com/163sbudziap.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163kkwuqjpu.html

Py:   from module import func
来源：http://www.xuanzx.com/163vfgzucdi.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163largknad.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163gmsxozrk.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163aggpokse.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163mwoarrun.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163hzqxxumk.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163xbsekhmd.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163wfgmqgzo.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163inofgosc.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163hvsqifex.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163qsatcdtt.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163zjodtczm.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163rtmhulwk.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163xvecqfnh.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163gmizkcnc.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163yhcrgiiv.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163hyjilhxt.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163wpsfpfas.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163hucyppxn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163cumltfyd.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163rfwodrjo.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163kwlhkxgc.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163nodvafoc.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163vyoikdnf.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163oibhxywr.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163conhldsl.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163jvciwaqk.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163ssiufdwn.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163chakrujy.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163qhabqyjx.html


<!-- 参考信息 -->