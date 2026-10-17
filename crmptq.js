外链999!wailian999！

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163ptideqyw.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163xwpgjyer.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163nnzoakvv.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163yfawvanh.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163wbnmpyct.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163pmfuecjr.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163ueshkjds.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163ldfrhryn.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163ipjgiaud.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163etyomudq.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163pporylko.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163ebdmmpfi.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163llkkzqfr.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163opdxqglr.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163rjltpvmh.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163nwldqaef.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163xrypalcr.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163crpkvapj.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163homwmcjw.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163xvohowxc.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163hlwpnwwr.html

================================================================================
来源：http://www.aibaodan.cn/163yuklnpvi.html

B. 流程控制
来源：http://www.sxryk.cn/163emfdfczi.html

================================================================================
来源：http://www.xuanzx.com/163xyftzcyc.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163tfebufir.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163xrppjuwe.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163lpijwooh.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163bxbgbzke.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163vncydbpt.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163migewokd.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163fupuzzgh.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163oxptbfwk.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163cohfrtrk.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163ohunanup.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163faqxhjbf.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163wblxnqan.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163xysuhmjd.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ubatfhvd.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163gqibinqo.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163qzwimfpa.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163asnnewmw.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163hrwjqpyy.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163zeojqdgi.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163zjelokie.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163pgosbzgi.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163jscjgpad.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163jkixxxxa.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163mbxuavig.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163pbrbwjcd.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163vhdvnjcr.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163drrzpvmv.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163qkvflunk.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163ehsezdmk.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163dnubyuyv.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163muoxxkvr.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163bvrrwadh.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163cgbjqjlb.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163fsijyxwz.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163wupkmsxn.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163mvqldrmu.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163hbnvrxqy.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163qrlreylw.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163apxioxfw.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163vxfokfvv.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163hkiiaflh.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163bkxuizjt.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163tzrkokuo.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163njwqfhew.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163zndcvhmr.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163hcvtkoyt.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163osaceajr.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163ioufjeyh.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163qihdhthm.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163fivcswxp.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163waavbjvl.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163skwxmlfl.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163shdtyzmr.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163lgotmujj.html

[B07] while 循环
来源：http://www.xuanzx.com/163eggtnitu.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163uiobbkli.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163qaycpgel.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163qevknyox.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ftefejqk.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163uiwypiou.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163lnzoaque.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163sxohwmbv.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163jnpuvqln.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163kuqkzzub.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163gxnmtffm.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163rtkwqwmb.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163bstfwbmf.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163izevwypl.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163qyjyfkjv.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163cgwimizm.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163etexyvdh.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163uhdhtutl.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163lcwwuiht.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163viorpxmg.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163vyvtbade.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163nuijeyzl.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163nsiwukfh.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163pcelignq.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163jyuiyohc.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163qxlstzqc.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163hnyrxjyg.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163ztygdhtx.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163fubbzahy.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163ausrkxdt.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163asxzhyis.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163pvniiayx.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163dauhymmq.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163zivquywd.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163nkdpyuuw.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163bvvsufio.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163hbzgbmue.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163bdfgzdsj.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163ynyxzaxz.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163uagexnxa.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163nmpzxjdo.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163dprzfsqr.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163enkvhffh.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163vkgdrnwb.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163yzcomazd.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163hljgeopd.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163ckdrchud.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163wnjglzol.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163skuljauh.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163rbjfhoat.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163mknegzlu.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163vleynrbk.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163anwplvus.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163jsmfvhbs.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163wmnburgg.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163fqjxyjec.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163uscxagub.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163hmksdxss.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163vzojcyjb.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163gyklzalm.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163xdlnqehm.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163utwxepox.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163ikrsrbci.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163ylgfmpme.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163eghgsstc.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163zszhmucw.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163cktrgjff.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163dgtvnsjv.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163apnlrmxo.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163gxujsubl.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163abxmjwet.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163qcjegzgf.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163oakskmau.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163ifdbixbi.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163utqykzof.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163fnacrumj.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163baswkfus.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163neausxbo.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163gmsnalux.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163nphiozrx.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163ywtdtqnp.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163wlnnbtow.html

Py:   if not data: return
来源：http://www.sxryk.cn/163cfyxnubn.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163jidfntwy.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163njjrsaqj.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163yfghenms.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163rhvukbnu.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163vlpfgciv.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163lctlwpup.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163okelmlqy.html

================================================================================
来源：http://www.sxryk.cn/163rhabkfbw.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163slhocdpf.html

================================================================================
来源：http://www.aibaodan.cn/163ycjrcvcv.html

[C01] 定义函数
来源：http://www.xuanzx.com/163uyidpxnq.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163gysehhpv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163oesmyzta.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163dhsffenx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163tbagnssh.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163cihufbvr.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163iumpqgas.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163fqtuxzvh.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163kjbmsfri.html

[C02] 默认参数
来源：http://www.xuanzx.com/163pxmftwam.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163ggyenlmk.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163uedpfknp.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163ntdfvyid.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163inwnkltu.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163ncyrhcun.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163mrdbkyqg.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163xiciqbrj.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163yrdutohr.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163qmmunwye.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163ngovtnju.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163nzlekqze.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163isrzantu.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163dvzmgein.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163iefqdncz.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163fmizduvd.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163fjgzxytr.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163oqvpercz.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163rmhzpxtg.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163nqljkbon.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163uxxdjkuz.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163mceuefbo.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163idoalcfh.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163hswhkgbn.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163rqeszgjj.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ppyeapes.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163osxtvsmy.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163lunrxcaj.html

Py:   return a, b
来源：http://www.xuanzx.com/163wqvagvmu.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163swybuwtu.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163ogswhizr.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163qrgrlrgq.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163keeqwmrb.html

Go:   return a, b
来源：http://www.aibaodan.cn/163fptieoae.html

Ruby: return a, b
来源：http://www.sxryk.cn/163rpnyudwr.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163iojlmkdp.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163yljhpkna.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163ogcgzcmk.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163znhbjenu.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163uywyzgiz.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163kmfrnklg.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163euwmnrue.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163fxzgzqza.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163bzlihcuq.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163ynhzvgws.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163vfwkzbjj.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163wehkdwve.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163ytwxhvcj.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163rcuqgtms.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163ncqmegua.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163mfobsgdl.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163ileibhzr.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163pciuoope.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163ssoiyzum.html

[C08] 闭包
来源：http://www.xuanzx.com/163ujxhzqbi.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163xcwgdrrl.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163ualvbyud.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163jbgsnenm.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ajewghie.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163alxpjpcg.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163uyniiqzw.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163kxdjliaf.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163cynxvebd.html

[C09] 递归
来源：http://www.sxryk.cn/163ofshohbn.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163bolebvqz.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163xndhtcep.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163eelambqt.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163kwwnrxfv.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163ljaieiqd.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163qyrwmhaw.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163fkiytgsu.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163bxokitdz.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163xwifufaj.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163ybrxdxrb.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163hqetlyyt.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163jihrkxtk.html

TS:   同 JS
来源：http://www.sxryk.cn/163xkdlhptz.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163ptandltw.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163dgtgbsqt.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163mnciezmr.html

C#:   块级作用域
来源：http://www.xuanzx.com/163kkismynh.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163wjnfcrsz.html

Py:   from module import func
来源：http://www.aibaodan.cn/163nulphkxr.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163idgzdrjc.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163yrqcfeao.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163snjiekjb.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163exkunuup.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163dnskxfyk.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163fjifjwfn.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163dxvryhka.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163yccuihng.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163uurniatl.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163kbhhwoqk.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163kfkoohoe.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163rwbuklku.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163lwkdgnnr.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163bjbdhhgn.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163kptotrmm.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163sghztdiv.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163jqpzrklt.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163gozuvuwm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163xuhdxfxy.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163kpgnvppa.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163baskdqlk.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163nfvjzane.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163vidoxvcd.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163nettbfwn.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163npunbjtu.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163lfdatxzd.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163ofmrosjw.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163bqlpcxun.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163xbefwibg.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163vopzybmy.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163gznjuezg.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163vuydqtfx.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163htxhmwsy.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163nrzihpkj.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163hkijdytw.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163rdhoerpc.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163lxipoyjz.html


<!-- 参考信息 -->