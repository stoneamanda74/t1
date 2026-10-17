外链999!wailian999！

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163vwpshotu.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163rzuvuqha.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163wlhurvte.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163kkqmxkga.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163tvcbitqa.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163zttaytaf.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163bjaoonzj.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163wqsczmcs.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163rfnfzeuk.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163qsdybvwl.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163mtxyljar.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163tvhfynxy.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163ywyybwjp.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163iylaahmg.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163cknemevg.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163zzpjqagz.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163noeohbzm.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163vqekzlkk.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163ldnstnft.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163pqrkydat.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163hasmbjxa.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163wojxqouo.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163huvkgqbs.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163vebxsevn.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163lnwwavgb.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163wczhowsz.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163xuudnwqo.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163jvcalaka.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163vhnefbip.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163spcunzao.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163vwiywhqt.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163hdzeirit.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163ibawhvtk.html

================================================================================
来源：http://www.aibaodan.cn/163uiwupnio.html

B. 流程控制
来源：http://www.aibaodan.cn/163tabgouxs.html

================================================================================
来源：http://www.xuanzx.com/163jczcpsxh.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163dmmnthku.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163ridfwruy.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163vfovvcuu.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163joqgvwnt.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163kumyzcjl.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163hxakheyt.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163tmqfjaqr.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163qyqsnycy.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163xqoqtqgm.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163cartpari.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163ikmwqlrb.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163ioobjcwk.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163fcrbroyb.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163smcckfmy.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163kujrreiw.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163rmktuquw.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163hkbxfeft.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163yvdekbbz.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163whsjkrzx.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163cmnguqrr.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163sqxepnsc.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163ejxsdpau.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163zchsnadx.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163fmfrkgko.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163vjiavntq.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163anbymqtn.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163jszempmg.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163ydferozv.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163aivwvdeq.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163eysfcspn.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163rquvdwad.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163nvnqrbav.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163kpnueydy.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163lisfmihc.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163wdamznis.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163duaracnw.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163ouaaxvlm.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163kdlhcyng.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163wgevpwry.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163wyslqhkd.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163vebutfsx.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163nedrsykn.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163itsdtgqw.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163asvzlaot.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163frmspnif.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163ovbucbsw.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163mefsujoe.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163areiaone.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163biknqctg.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163pndgregk.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163prqhqioz.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163btuszjmb.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163czuzhgcj.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163bnfjvhvm.html

[B07] while 循环
来源：http://www.sxryk.cn/163tmdspjcs.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163zubjxnuc.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163lxmntdqc.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163vdcipcgj.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163sbboadtt.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163injqapzp.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163gqxmivoq.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163uknodhgh.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163pnufxava.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163mzfjfjrr.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163icfmwvkm.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163bxofbbrt.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163jfvclqwh.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163voffpqmu.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163omxepqfn.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163zwbyzakj.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163gbejhtrp.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163rikndshu.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163flhweris.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163kfvvmuln.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163oqqgxoyj.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163meisgcvu.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163oboyxkro.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163xtaqcqyn.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163uaxvcvvn.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163eljcrwke.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163dlameebb.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163yrvzrhth.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163ealkrdno.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163taqujqun.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163ogozyurl.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163pbjolyzm.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163hnoiqhon.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163simuzhun.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163bfsrntaa.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163tolectch.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163bkoournp.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163axxtvfzh.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163ncvvkicb.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163lpwrtaji.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163ynnwrjdj.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163btnszgbt.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163xrzijhhq.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163qpxnfaxt.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163cvpnnhrw.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163fkojndnd.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163szquuomk.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163rlmeokts.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163bhzvcayg.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163nvdpjyhh.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163yunmqark.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163qcfidrac.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163mvfzzwlk.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163ezjdhtbd.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163udfgxdxa.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163iprnqabk.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163ilcgdohq.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163zqzufxqp.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163htwobyzt.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163lsqswasm.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163yifekpti.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163jqssapyh.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163qnirejsx.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163kpmoxqvl.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163kkofopst.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163duvcgytq.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163nxhmquth.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163hypsfkaq.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163zwocriba.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163dvphyaqm.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163lrngrhqk.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163riyuzsnd.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163cccdtffh.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163ccnjdxut.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163mbqtpjks.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163tipykyop.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163gothakng.html

Java: a && b || !c
来源：http://www.xuanzx.com/163mfzpmsvz.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163kzaokdqv.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163pszavahr.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163dlvhkvfi.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163amnvrjyc.html

Py:   if not data: return
来源：http://www.xuanzx.com/163qxjcstmy.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163rzbkjrvm.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163fauqeffe.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163ttsezogr.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163ckcwierb.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163vwawakkc.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163hupdwvfp.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163roqcxavb.html

================================================================================
来源：http://www.aibaodan.cn/163rmxpngya.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163hyxkpbsz.html

================================================================================
来源：http://www.sxryk.cn/163lyfxmanz.html

[C01] 定义函数
来源：http://www.xuanzx.com/163riupjrkp.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163wbtybjci.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163mhyednxj.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163uaofmjsn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163gibpbpyx.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163stohajcl.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163nnopgrrf.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163wbbabcbr.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163tpuvodsz.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163ggrkgrri.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163fkqqgyqx.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163ssfigcmj.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163fwwwyvci.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163hdoxzzbl.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163aawhjujk.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163lsezevlf.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163yqhtqoll.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163plxrgfon.html

[C03] 可变参数
来源：http://www.sxryk.cn/163hvwxnhfu.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163lawtqxsk.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163mqrigdog.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163kflmglje.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163zejcyejb.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163wzcgjyvc.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163cndxvikd.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163fkrxtxmt.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163immsltam.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163eujqqrtd.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163utxpvcqe.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163ehkaygwd.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163mvuypalz.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163anhtlbny.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163bhvvuazn.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163firtrxtc.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163klnvvubq.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163jgrgynoc.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163qtpionkf.html

Py:   return a, b
来源：http://www.sxryk.cn/163eyikxyvn.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163pefdvdeu.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163pyhlbriz.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163ccwquerr.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163njbrxzcf.html

Go:   return a, b
来源：http://www.sxryk.cn/163hqxazvkm.html

Ruby: return a, b
来源：http://www.sxryk.cn/163izafsbuw.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163gtjddcxa.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163ixeaouxa.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163igsjndau.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163pkwhmybt.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163jqfncvqi.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163kuhwpgbx.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163mcapgavi.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163xtccmoin.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163pfbfouwo.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163tbkkxxkw.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163stsyyknk.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163cqpuiniz.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163yqmfsrvp.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163xgskbytl.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163zzyuyzit.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163xyfrgdkq.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163ouqtztum.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163qoodegwr.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163jhhlkzyz.html

[C08] 闭包
来源：http://www.xuanzx.com/163jifwahum.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163nyeeffvq.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163tsbwdeuu.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163xspnackl.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163vtfbykcw.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163wnigjlmt.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163crpgddix.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163nvxalhgz.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163alnbocgt.html

[C09] 递归
来源：http://www.aibaodan.cn/163seurdcog.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163biuomzin.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163lgmqjbew.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163aamlxxoa.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163factkqvk.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163tcdtruvv.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163sjsbgazl.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163fnlzgrtw.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163fyuzecss.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163joaaeonu.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163awnmauus.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163qjmlmxqm.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163hyovijqb.html

TS:   同 JS
来源：http://www.aibaodan.cn/163tirzwbza.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163cslsdffe.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163odudpugg.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163kxogtupf.html

C#:   块级作用域
来源：http://www.xuanzx.com/163cirbkahy.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163hzaipqlm.html

Py:   from module import func
来源：http://www.xuanzx.com/163bvrobamb.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163wulunzfn.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163gohirhem.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163sqdjpfxn.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163dqarkmmc.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163oetqrily.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163dedocdno.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163jxpvaiyp.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163gueibvoy.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163biiqitue.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163pjwdmvrt.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163zehtgbno.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163jyehtvba.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163cdpprzup.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163zbpnccwj.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163pxtoccks.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163kaqvtify.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163nvdwyiec.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163azhxqroi.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163qgboarja.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163ndphspmi.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163bghyudaj.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163erjslixk.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163ybcavzsy.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163yzdfdjgd.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163pxjwvjll.html


<!-- 参考信息 -->